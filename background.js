let onCopy1 = function(info, tab) {
    chrome.tabs.sendMessage(tab.id, {
        target: "copy1"
    });
};

let onCopy2 = function(info, tab) {
    chrome.tabs.sendMessage(tab.id, {
        target: "copy2"
    });
};

chrome.contextMenus.create({
    id: "parent",
    title: "Index Locator",
    contexts: ["all"]
});

chrome.contextMenus.create({
    id: "copy2",
    title: "Copy for kotlin with selenide",
    contexts: ["all"],
    onclick: onCopy1,
parentId: "parent"
});

chrome.contextMenus.create({
    id: "copy1",
    title: "Copy for java with selenium",
    contexts: ["all"],
    onclick: onCopy2,
parentId: "parent"
});

