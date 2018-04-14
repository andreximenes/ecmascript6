"use strict";

var defaultLine = "Start your journey now!";
var BR = "<br />";
var print = function print() {
    return console.log((arguments.length <= 0 ? undefined : arguments[0]) + ":" + (arguments.length <= 1 ? undefined : arguments[1]));
};

var options = {
    _intro: "You can type",
    _option: ["left", "right", "up", "down", "help"],
    outputOptionss: function outputOptionss() {
        var _this = this;

        this._option.forEach(function (f) {
            return addToOutput(_this._intro + " " + f);
        });
    }
};

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
        options.outputOptionss();
    } else {
        addToOutput(commands.value);
    }
}

main();

print("hello");
//# sourceMappingURL=hello.js.map