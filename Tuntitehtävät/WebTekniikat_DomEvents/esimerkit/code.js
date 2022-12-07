<<<<<<< HEAD
/* let button = document.querySelector("button"); */
let form = document.getElementById("lomake");
form.addEventListener("submit", showUsername);

document.getElementById("show").addEventListener("click", showAll)

let users = []
=======
// let button = document.querySelector("button");
let form = document.getElementById("lomake");
form.addEventListener("submit", addUsername);

document.getElementById("show").addEventListener("click", showAll);

let users = [];
>>>>>>> a73d867eb594a3802b882dfa742ff88a3985aafb

/**
 * 
 * @param {Event} event 
 */
<<<<<<< HEAD
function showUsername(event){
    event.preventDefault();

    let formData = new FormData(form);
    let username = formData.get("username");
    users.push(username);
    
   
}

function showAll(){
    for(user of users){
    let h = document.createElement("h3");
    h.textContent = user;
    document.body.appendChild(h)
=======
function addUsername(event){
    event.preventDefault();
    let formData = new FormData(form);
    let username = formData.get("username");
    users.push(username);
}

function showAll(){
    for (const user of users) {
        let h = document.createElement("h3");
        h.textContent = user;
        document.body.appendChild(h);
>>>>>>> a73d867eb594a3802b882dfa742ff88a3985aafb
    }
}