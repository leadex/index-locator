var backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});

var elements = null

chrome.devtools.panels.elements.onSelectionChanged.addListener(generateSelectors);
function generateSelectors() {

        chrome.devtools.inspectedWindow.eval("$0.tagName", {
            useContentScriptContext: true
        }, function(resultTag) {

          chrome.devtools.inspectedWindow.eval('Array.from(document.getElementsByTagName($0.tagName)).indexOf($0)', {
              useContentScriptContext: true
          }, function(resultIndex) {

            insert(resultTag.toLowerCase(), resultIndex)

          });
        });
    }

function insert(tag, index) {

  var target1 = 'val element get() = Selenide.`$$`(By.tagName("'
  .concat(tag)
  .concat('"))')
  .concat('[')
  .concat(index)
  .concat('] title ')
  .concat('"Element Title"')

  var target2 = 'WebElement element = driver.findElements(By.tagName("'
  .concat(tag)
  .concat('"))')
  .concat('.get(')
  .concat(index)
  .concat(');')

          document.getElementsByClassName("jsResult1")[0].innerHTML = target1;
          document.getElementsByClassName("jsResult2")[0].innerHTML = target2;
}
