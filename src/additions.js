const BR = "<br />";

export const print = (...args) => console.log(args[0] + ":"+ args[1]);

export var options = {
    _intro: "You can type",
    _option: ["left", "right", "up", "down", "help"],
    outputOptions() {
        this._option.forEach(f => addToOutput(this._intro + " " + f ));
    } 
}


function addToOutput(newLine=defaultLine) {
    let output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + BR + newLine;
}