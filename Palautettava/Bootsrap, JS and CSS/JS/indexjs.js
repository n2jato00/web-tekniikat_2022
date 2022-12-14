//Here we have the navbar JS. Separate functions for all bounce hover effects
//since we did not have the means to make the classlist adds/removes with shorter code

let link1 = document.getElementById('link1')
let home = document.getElementById('home');

function animation() {
    home.classList.add('fa-bounce');
}

function no_animation() {
    home.classList.remove('fa-bounce');
}

link1.addEventListener('mouseenter', animation);
link1.addEventListener('mouseleave', no_animation);


//-----//

let link3 = document.getElementById('link3')
let kiwi = document.getElementById('kiwi');

function animation3() {
    kiwi.classList.add('fa-bounce');
}

function no_animation3() {
    kiwi.classList.remove('fa-bounce');
}

link3.addEventListener('mouseenter', animation3);
link3.addEventListener('mouseleave', no_animation3);


//-----//

let link7 = document.getElementById('link7')
let bulb = document.getElementById('bulb');

function animation7() {
    bulb.classList.add('fa-bounce');
}

function no_animation7() {
    bulb.classList.remove('fa-bounce');
}

link7.addEventListener('mouseenter', animation7);
link7.addEventListener('mouseleave', no_animation7);


let button1 = document.querySelector(".btn-primary");

button1.addEventListener("click", changeColor);

function changeColor(){
    document.querySelector(".navbar").style.backgroundColor = "red"

}








