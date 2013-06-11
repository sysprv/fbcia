(function() {

"use strict";
var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

})();

/*
 * hats off to http://stackoverflow.com/questions/9515704/building-a-chrome-extension-inject-code-in-a-page-using-a-content-script
 */
