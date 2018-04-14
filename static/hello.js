(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generate = generate;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Encounter = exports.Encounter = function () {
    function Encounter() {
        var introText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        _classCallCheck(this, Encounter);

        this.introText = introText;
    }

    _createClass(Encounter, [{
        key: "whenEncounter",
        value: function whenEncounter() {
            return this.introText;
        }
    }]);

    return Encounter;
}();

var Bear = exports.Bear = function (_Encounter) {
    _inherits(Bear, _Encounter);

    function Bear() {
        _classCallCheck(this, Bear);

        return _possibleConstructorReturn(this, (Bear.__proto__ || Object.getPrototypeOf(Bear)).call(this, "grr grow, you encountered a Bear!"));
    }

    return Bear;
}(Encounter);

var Angel = exports.Angel = function (_Encounter2) {
    _inherits(Angel, _Encounter2);

    function Angel() {
        _classCallCheck(this, Angel);

        return _possibleConstructorReturn(this, (Angel.__proto__ || Object.getPrototypeOf(Angel)).call(this, "Wow, you encountred an Angel! This will give you strength and healing possibilities"));
    }

    return Angel;
}(Encounter);

var Ghost = exports.Ghost = function (_Encounter3) {
    _inherits(Ghost, _Encounter3);

    function Ghost() {
        _classCallCheck(this, Ghost);

        return _possibleConstructorReturn(this, (Ghost.__proto__ || Object.getPrototypeOf(Ghost)).call(this, "Booh, you encountred a Ghost!"));
    }

    return Ghost;
}(Encounter);

function generate() {
    var number = Math.floor(Math.random() * (4 - 1)) + 1;
    switch (number) {
        case 1:
            {
                return new Bear();
                break;
            }
        case 2:
            {
                return new Angel();
                break;
            }
        case 3:
            {
                return new Ghost();
                break;
            }
        default:
            {
                return new Encounter();
                break;
            }
    }
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Enviroment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encounter = require("./encounter");

var encounter = _interopRequireWildcard(_encounter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enviroment = exports.Enviroment = function () {
    function Enviroment(name) {
        _classCallCheck(this, Enviroment);

        this.name = name;
        this.encounter = encounter.generate();
    }

    _createClass(Enviroment, [{
        key: "stumbleUpon",
        value: function stumbleUpon() {
            this.encounter = encounter.generate();
            var interaction = this.name + "you stumbled upon ..." + this.encounter.whenEncounter();
            return interaction;
        }
    }]);

    return Enviroment;
}();

},{"./encounter":2}],4:[function(require,module,exports){
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

},{"./additions":1,"./encounter":2,"./enviroment":3}]},{},[4]);
