const defaultLine = "Start your journey now!";
const BR = "<br />";
const print = (...args) => console.log(args[0] + ":"+ args[1]);

var options = {
    _intro: "You can type",
    _option: ["left", "right", "up", "down", "help"],
    outputOptionss () {
        this._option.forEach(f => addToOutput(this._intro + " " + f ));
    } 
}

function main() {
    let enterEl = document.querySelector("#enter");
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();
}

function addToOutput(newLine=defaultLine) {
    let output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + BR + newLine;
}

function onClickEnter() {
    let commands = document.querySelector("#commands");
    if(commands.value == "help"){
        options.outputOptionss();
    } else {
        addToOutput(commands.value);
    }
}

main();

print("log", "hello");