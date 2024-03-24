let container = document.querySelector(".container");
let addButton = document.getElementById("addButton");
// let header = document.querySelector("header");
// let addButton = header.querySelector("#addButton");



/*function showData(){
    container.innerHTML = localStorage.getItem("notes");
}
showData();*/


function updateLocalstorage() {
    let textArea = document.querySelectorAll("textarea");
    // console.log(textArea);
    let divArray = [];
    textArea.forEach((elm) => {
        return divArray.push(elm.value);
    })
    
    localStorage.setItem("allData", JSON.stringify(divArray));
    // localStorage.setItem("notes", container.innerHTML);
}


addButton.addEventListener("click", function () {
    addNotes();
    updateLocalstorage();
});


const addNotes = (text = "") => {
    let card = document.createElement("div");
    card.classList.add("notes");

    let htmlData = `<div class="button-section">
    <button type="button" title="button" class="editButton"><i class="fa-regular fa-pen-to-square"></i></button>
    <button type="button" title="button" class="deleteButton"><i class="fa-solid fa-trash"></i></button>
    </div>

    <div class="main"></div>
    <textarea title="Write"></textarea>`;

    card.insertAdjacentHTML("afterbegin", htmlData);
    container.appendChild(card);


    // Getting the references
    let saveButton = card.querySelector(".saveButton");
    let editButton = card.querySelector(".editButton");
    let deleteButton = card.querySelector(".deleteButton");
    let main = card.querySelector(".main");
    let textarea = card.querySelector("textarea");

    textarea.value = text;
    editButton.addEventListener("click", function () {
        textarea.classList.toggle("hidden");
        if (textarea.className == "hidden") {
            main.innerText = textarea.value;
            updateLocalstorage();
        }
        else {
            main.innerText = "";
            updateLocalstorage();
        }

        updateLocalstorage();
    });

    // textarea.addEventListener("change", function (e){
    //     main.innerText = textarea.value;
    //     textarea.value = '';
    // })

    deleteButton.addEventListener("click", function () {
        card.remove();
        updateLocalstorage();
    })
}

(
    function () {
        let showData = JSON.parse(localStorage.getItem("allData"));
        if (showData) {
            showData.forEach((elm) => {
                addNotes(elm);
            })
        }
    }
)();