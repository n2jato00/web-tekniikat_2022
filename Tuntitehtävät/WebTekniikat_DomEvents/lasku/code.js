<<<<<<< HEAD
let form = document.querySelector("form");
form.addEventListener("submit", Calculate);
let radio = document.getElementById("sum");

/**
 * 
 * @param {Event} event 
 */

function Calculate(event){
    event.preventDefault();

    let formData = new FormData(form)
    let number1 = Number(formData.get("num1"));
    let number2 = Number(formData.get("num2"));

    if (radio.checked){
    document.getElementById("result").innerHTML = number1 + number2;
    } else document.getElementById("result").innerHTML = number1 - number2
=======
let form = document.getElementById("calc");
let result = document.getElementById("result");

form.addEventListener("submit", calculate);

function calculate(e){
    e.preventDefault();

    let fData = new FormData(form);
    let num1 = Number(fData.get("num1"));
    let num2 = Number(fData.get("num2"));

    let arit = fData.get("arit");

    let res = arit === "sum" ? num1+num2 : num1-num2;
    
    // if(arit === "sum"){
    //     res = num1+num2;
    // }else{
    //     res = num1-num2
    // }


    result.textContent = "Tulos on "+ res;
>>>>>>> a73d867eb594a3802b882dfa742ff88a3985aafb
}