/* let elem = document.getElementById("content");
console.log(elem.nodeName);

let elem1 = document.querySelector(".basic");
console.log(elem1.tagName);

let elem2 = document.querySelector("li:first-child")
console.log(elem2.textContent)

let elem3 = document.querySelector("ul>:last-child")
console.log(elem3.textContent) */

/* let nodes = document.querySelectorAll("body *")
for (elem of nodes) {
    console.log(elem.nodeName);   
}

let pElems = document.querySelectorAll("article p")
for(elem of pElems){
    console.log(elem.textContent)
}
 */
let elements = document.querySelectorAll("#content *")

for( elem of elements){
    if(elem.textContent.length > 10){
        console.log(elem.nodeName)
    }
}