let button = document.getElementById("show");

let numerot = [3,4,5,6]

//Lambda-lauseke
numerot.forEach(num=>console.log(num));
//Anonyymu funktio
numerot.forEach(function(num){console.log(num)});
//Erillinen funktio
numerot.forEach(tulosta);

function tulosta(num){
    console.log(num)
}

let uusitaulukko = numerot.map(mappaus);
function mappaus(num){
    return num + " on hieno numero";
}
console.log(uusitaulukko)

button.addEventListener("click", function (event){
    event.preventDefault();
    console.log("Painettu nappia")
})

