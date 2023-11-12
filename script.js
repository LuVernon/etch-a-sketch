let grid = document.querySelector("#gridder");
let askSize = document.querySelector("#ask");
let rainbow = document.querySelector("#rainbow"); 
let clearCanvas = document.querySelector("#clear");
let shading = document.querySelector("#shading");
let eraser = document.querySelector("#rubber");

function rand () {
    return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%`;
};

function formate (size) {
    let ratios = 500/size;  
    let div = document.createElement("div");
    if (grid.childElementCount > 0) {
            grid.replaceChildren();
    }
    div.style.height = ratios + "px"; 
    div.style.width = ratios + "px"; 
    div.style.flex = ratios + "px"; 
    for (let i=0; i<size*size; i++) {
       grid.appendChild(div.cloneNode(true));
    }
    let gc = grid.children;
        for (let i=0; i<grid.childElementCount; i++) {
            gc[i].addEventListener("mouseover", ()=>{
                if (eraser.checked == true) {
                    gc[i].style.backgroundColor = "white";
                }
                else if (rainbow.checked == false) {
                    gc[i].style.backgroundColor = "black";
                }
                else if (gc[i].style.backgroundColor != "" && gc[i].style.backgroundColor != "black" && shading.checked == true) {
                    let current = gc[i].style.backgroundColor;
                    let r = current.slice(4, current.indexOf(",")); 
                    let g = current.slice(current.indexOf(" ")+1, current.lastIndexOf(",")); 
                    let b = current.slice(current.lastIndexOf(" ")+1, current.indexOf(")"));
                    
                    
                    if (r < 3 && g < 3 && b < 3) {
                        r = 0; 
                        g = 0; 
                        b = 0; 
                        gc[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                        return;
                    }
                
                    gc[i].style.backgroundColor = `rgb(${r-(r/4)}, ${g-(g/4)}, ${b-(b/4)})`; 
                }
                else if (rainbow.checked == true) {
                    gc[i].style.backgroundColor = rand();  
                }
            });
        }
};

clearCanvas.addEventListener("click", () => {
    for (let i=0; i<grid.childElementCount; i++) {
        grid.childNodes[i].style.backgroundColor = "white";
    } 
});

askSize.addEventListener("click", () => {
    let customSize = window.prompt("How many squares do you want per side?");
    if (customSize >= 101 || isNaN(customSize) || customSize < 1) {
        window.alert("Please pick a number below from 1-100.");
        return;
    };
    formate(customSize);
});

/* 
function silly() {
    let gridSize = Number(grid.childElementCount);
    return Number(Math.floor(Math.random()*gridSize)+1);
};

setInterval(()=>{
    grid.childNodes[silly()].style.backgroundColor = `rgb(${rand()}, 0,${rand()} `;
},100);
*/