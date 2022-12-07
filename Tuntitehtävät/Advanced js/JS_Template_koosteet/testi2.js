let person = {
    fname: "Tommi",
    lname: "Järvenpää",
    age: 29
}

console.log( person.fname );

person.age = 23;

let persons = [];
persons.push(person)

for (p of persons) {
    console.log(p.age)
}

let car = {
    plateNr: "OOP-001",
    currentSpeed: 120
}
console.log(car)

let car2 = {
    plateNr: "KUR-597",
    currentSpeed: 160
}
console.log(car2)
car2.currentSpeed = 140;
console.log(car2)
