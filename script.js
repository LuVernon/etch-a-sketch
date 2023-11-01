let grid = document.querySelector("#gridder");
let button = document.querySelector("#ask");

function formate (size) {
    console.log(size);
    let div = document.createElement("div");
    div.classList.add('child');
    for (i=0; i<256; i++) {
       grid.appendChild(div.cloneNode(true));
    }
};

button.addEventListener("click", () => {
    let customSize = window.prompt("How many tiles do you want for your painting!?");
    console.log(typeof customSize);
    if (typeof customSize != "number") {
        console.log("hi");
        return;
    }
    formate(customSize);
});
