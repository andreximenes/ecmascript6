import {Bear} from './encounter';
import {Enviroment} from './enviroment';
import {print, options} from './additions';

const defaultLine = "Start your journey now!";
const BR = "<br />";

var enviroment = new Enviroment("Forest - ")

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
    if (commands.value == "help") {
        options.outputOptions();
    } else {
        onCommand(commands.value);
    }
}

function onCommand(command) {
    if (command == "left") {
        addToOutput(enviroment.stumbleUpon());
    } else if (command == "right") {
        addToOutput(enviroment.stumbleUpon());
    } else if (command == "up") {
        addToOutput(enviroment.stumbleUpon());
    } else if (command == "down") {
        addToOutput(enviroment.stumbleUpon());
    } else {
        options.outputOptions();
    }
}

main();

print("log", "hello");