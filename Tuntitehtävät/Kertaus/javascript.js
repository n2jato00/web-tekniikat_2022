// Kun painiketta painetaan
let button = document.getElementById("addButton");
button.onclick = function(){
    //Lue syöte
    let inputName = document.getElementById("name").value;
    //Lisää sivulle
    let newElement = document.createElement("li");
    newElement.textContent = inputName;
    document.querySelector("ul").appendChild(newElement);
}
