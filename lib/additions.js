"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var BR = "<br />";

var print = exports.print = function print() {
    return console.log((arguments.length <= 0 ? undefined : arguments[0]) + ":" + (arguments.length <= 1 ? undefined : arguments[1]));
};

var options = exports.options = {
    _intro: "You can type",
    _option: ["left", "right", "up", "down", "help"],
    outputOptions: function outputOptions() {
        var _this = this;

        this._option.forEach(function (f) {
            return addToOutput(_this._intro + " " + f);
        });
    }
};

function addToOutput() {
    var newLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLine;

    var output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + BR + newLine;
}
//# sourceMappingURL=additions.js.map