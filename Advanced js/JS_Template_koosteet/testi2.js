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