let container = document.querySelector(".container");
let addButton = document.getElementById("addButton");
// let header = document.querySelector("header");
// let addButton = header.querySelector("#addButton");

// Setting value to the localstorage
function setLocalstorage() {
    let textArea = document.querySelectorAll("textarea");
    let divArray = [];
    textArea.forEach((elm) => {
        return divArray.push(elm.value);
    })

    return localStorage.setItem("allData", JSON.stringify(divArray));
}
// Getting value to the localstorage
function getLocalStorage() {
    return JSON.parse(localStorage.getItem("allData")) || [];
}
// Showing data from the localstorage
const showData = () => {
    let store = getLocalStorage();
    store.forEach((curElm) => {
        addNotes(curElm);
    });
};


function addNotes(text = "") {
    let card = document.createElement("div");
    card.classList.add("notes");

    // <button type="button" title="button" class="saveButton">SAVE</button>
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
    // Edit button
    editButton.addEventListener("click", function () {
        textarea.classList.toggle("hidden");
        // setLocalstorage();

        if (textarea.className == "hidden") {
            // setLocalstorage();
            main.innerText = textarea.value;
            // setLocalstorage();
        }
        else {
            // setLocalstorage();
            main.innerText = "";
            // setLocalstorage();
        }
        // setLocalstorage();

        /*if(main.innerText === textarea.value){
        window.addEventListener("load", function (e){
                textarea.classList.add("hidden");
                console.log(main.innerText);
            //e.preventDefault();
        })
        }
        console.log(main.innerText);
        })*/

        /*else{
            textarea.style.display = "block";
        }/*/

    })

    // Event on Textarea
    textarea.addEventListener("change", function (e) {
        const value = e.target.value;
        main.innerHTML = value;
        textarea.classList.add("hidden");
        setLocalstorage();
    })

    // Delete button
    deleteButton.addEventListener("click", function () {
        card.remove();
        setLocalstorage();
    })

    /*if(main.innerText === textarea.value){
        window.addEventListener("load", function (e){
            textarea.classList.add("hidden");
            console.log(main.innerText);
        })
    //setLocalstorage();
    }*/
    
    // console.log(main.innerHTML);
    
    
}

showData();

addButton.addEventListener("click", function () {
    addNotes();
    // setLocalstorage();
});