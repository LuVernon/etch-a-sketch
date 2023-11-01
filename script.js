let grid = document.querySelector("#gridder");
let button = document.querySelector("#ask");

function rand () {
    return Math.floor(Math.random()*(256-1))+1;
};

function formate (size) {
    let ratios = 960/size;  
    let div = document.createElement("div");
    if (grid.childElementCount > 0) {
            grid.replaceChildren();
    }
    div.style.height = ratios + "px"; 
    div.style.width = ratios + "px"; 
    div.style.flex = ratios + "px"; 
    div.classList.add('child');
    for (let i=0; i<size*size; i++) {
       grid.appendChild(div.cloneNode(true));
    }
    let gc = grid.children;
    for (let i=0; i<grid.childElementCount; i++) {
        gc[i].addEventListener("mouseover", ()=>{
            gc[i].style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
        });
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
