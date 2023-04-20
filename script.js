let ent = document.getElementsByTagName("i")[0];

let tex = document.getElementsByTagName("input")[0];

let additemms = document.getElementsByClassName("addeditems")[0];

let additem = function () {
    
    let itemm = document.createElement("div");
    
    itemm.textContent = tex.value;

    itemm.style.height = "1.5rem";

    itemm.style.padding = "1rem";

    additemms.append(itemm); // Fixed variable name

    // Add the following line if you want to append the newly created div to the body
    // document.body.appendChild(itemm);
}

ent.addEventListener('click',additem);
