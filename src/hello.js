function main() {
    var enterEl = document.querySelector("#enter");
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();
}

function addToOutput(newLine="Start your journey now!"){
    var output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + "<br />" + newLine;
}

function onClickEnter() {
    var commands = document.querySelector("#commands");
    addToOutput(commands.value);
}

main();

console.log("hello");