let elem = document.querySelector("body")
let hr = document.createElement("hr");
elem.appendChild(hr);

let h3 = document.createElement("h3");
h3.textContent = "Tommi Järvenpää"
elem.appendChild(h3);


let ul = document.querySelector("ul")
let li = document.createElement("li");
li.textContent = "Sunnuntai"
ul.appendChild(li);

let del = document.querySelector("#content li");
del.remove();

let items = document.querySelectorAll("ul:first-child li");
for(item of items){
    let text = item.textContent;
    item.textContent = "";

    let b = document.createElement("b");
    b.textContent = text;
    item.appendChild(b);
}
/* lastUl.style.fontWeight = "bold" */

