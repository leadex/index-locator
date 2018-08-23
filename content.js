/* global SelectorGenerator */
let clickedElement;
function copyToClipboard(text) {
    const input = document.createElement("input");
    input.style.position = "fixed";
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    document.body.removeChild(input);
}
function addClass(element, cls) {
    let classes = (element.className || "")
        .split(" ");
    if (!classes.includes(cls)) {
        element.className = classes.concat([cls])
            .join(" ");
    }
}
function removeClass(element, cls) {
    let classes = (element.className || "")
        .split(" ");
    if (classes.includes(cls)) {
        element.className = classes.filter(_ => _ !== cls)
            .join(" ");
    }
}
function highlight(element) {
    if (!element) {
        return;
    }
    const higlightClass = "__copy-css-selector-highlighted";
    addClass(element, higlightClass);
    setTimeout(() => {
        removeClass(element, higlightClass);
    }, 2000);
}

document.addEventListener("mousedown", (event) => {
    clickedElement = event.target;
}, true);
chrome.runtime.onMessage.addListener((request) => {
var elements = Array.from(document.querySelectorAll(clickedElement.tagName.toLowerCase()));
    if (request && request.target === "copy1") {


var target1 = 'val element get() = Selenide.`$$`(By.tagName("'
.concat(clickedElement.tagName.toLowerCase())
.concat('"))')
.concat('[')
.concat(elements.indexOf(clickedElement))
.concat('] title ')
.concat('"Element Title"')

        copyToClipboard(target1);

    }
    if (request && request.target === "copy2") {

var target2 = 'WebElement element = driver.findElements(By.tagName("'
.concat(clickedElement.tagName.toLowerCase())
.concat('"))')
.concat('.get(')
.concat(elements.indexOf(clickedElement))
.concat(');')

        copyToClipboard(target2);
    }
});

