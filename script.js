let grid = document.querySelector("#gridder");
let button = document.querySelector("#ask");

function formate (size) {
    let ratios = 960/size;  
    let div = document.createElement("div");
    if (grid.childNodes.length > 0) {
            grid.replaceChildren();
    }
    div.style.height = ratios + "px"; 
    div.style.width = ratios + "px"; 
    div.style.flex = ratios + "px"; 
    div.classList.add('child');
    div.addEventListener("mouseenter", ()=>{console.log("hello")});
    for (let i=0; i<size*size; i++) {
       grid.appendChild(div.cloneNode(true));
    }
};

button.addEventListener("click", () => {
    let customSize = window.prompt("How many squares do you want per side?");
    if (customSize >= 101 || isNaN(customSize) || customSize < 1) {
        window.alert("Please pick a number below from 1-100.");
        return;
    };
    formate(customSize);
});
