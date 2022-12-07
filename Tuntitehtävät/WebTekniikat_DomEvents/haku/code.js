<<<<<<< HEAD
let input = document.getElementById("search");
let listItems = document.querySelectorAll("li");

input.addEventListener("input", findText)

function findText(){
    let keyWord = input.value;

    for(li of listItems){
        if(li.textContent.includes(keyWord)){
            li.style.display = "list-item"
        } else {
            li.style.display = "none"
        }
    }
    
=======
let searchInput = document.getElementById("search");
let listItems = document.querySelectorAll("li");

searchInput.addEventListener("input", search);


function search(){
    let keyword = searchInput.value;
    console.log(keyword);
    for (const li of listItems) {
        if(li.textContent.includes(keyword)){
            li.style.display = "list-item";
        }else{
            li.style.display = "none";
        }

    }
>>>>>>> a73d867eb594a3802b882dfa742ff88a3985aafb
}