'use strict';

var _encounter = require('./encounter');

var _enviroment = require('./enviroment');

var _additions = require('./additions');

var defaultLine = "Start your journey now!";
var BR = "<br />";

var enviroment = new _enviroment.Enviroment("Forest - ");

function main() {
    var enterEl = document.querySelector("#enter");
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();
}

function addToOutput() {
    var newLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLine;

    var output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + BR + newLine;
}

function onClickEnter() {
    var commands = document.querySelector("#commands");
    if (commands.value == "help") {
        _additions.options.outputOptions();
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
        _additions.options.outputOptions();
    }
}

main();

(0, _additions.print)("log", "hello");
//# sourceMappingURL=hello.js.map