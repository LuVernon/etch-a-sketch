let grid = document.querySelector("#gridder");

function formate () {
    let div = document.createElement("div");
    div.classList.add('child');
    for (i=0; i<256; i++) {
       grid.appendChild(div.cloneNode(true));
    }
};

formate();