var backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});
chrome.devtools.panels.elements.createSidebarPane("Index Locator",
    function(sidebar) {
        sidebar.setPage("../devtools-content.html");
        sidebar.onShown.addListener(handleShown);
        sidebar.onHidden.addListener(handleHidden);
    }
);
function handleShown() {
    chrome.extension.sendMessage({
        message: "generate-selector"
    });
}
function handleHidden() {
    var xpathOrCss = 'xpath';
    var onChange = false;
    var xpath = [xpathOrCss, '', onChange];
    backgroundPageConnection.postMessage({
        name: "xpath-message",
        tabId: chrome.devtools.inspectedWindow.tabId,
        xpath: xpath
    });
}
