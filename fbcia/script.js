(function() {

"use strict";
// runs in the page, in a <script> element.

// Original text:
// Public
// Friends -> Friends and the CIA
// Friends except Acquaintances -> Friends and the CIA except acquaintances
// Only Me -> Only me and the CIA
// Custom -> Custom + CIA
//
// Close Friends -> Close Friends and the CIA
// (Any others...)
// See all lists...

function ciafiedText(s) {
    switch (s) {
        case "Public":
            return s;
            break;
        case "Friends":
            return s + " and the CIA";
            break;
        case "Friends except Acquaintances":
            return "Friends and the CIA except acquaintances";
            break;
        case "Only Me":
            return s + " and the CIA";
            break;
        case "Custom":
            return s + " + the CIA";
            break;
        case "Close Friends":
            return s + " and the CIA";
            break;
        case "See all lists...":
            return s; // no additions
            break;
        default:
            return s + " + CIA";
            break;
    }
}

var xpath_expr = "//div[@id='composerTourAudience']" +
                 "//ul[@class='uiMenuInner']" +
                 "/li[contains(@class, 'uiMenuItem') and " +
                    "contains(@class, 'uiMenuItemRadio') and " +
                    "contains(@class, 'uiSelectorOption') and " +
                    "contains(@class, 'fbPrivacyAudienceSelectorOption')]" +
                 "//span[@class='itemLabel fsm']";

var span_iter = document.evaluate(xpath_expr, document, null, XPathResult.ANY_TYPE, null);
var spans = [];
var span;

while (span = span_iter.iterateNext()) {
    spans.push(span);
    // don't change the dom while iterating.
}

spans.forEach(function (span) {
    // innerText or textContent are less useful here -
    // we only need the content of the text child of this span,
    // not the concatenated text of all children.
    // console.log(span.childNodes[0].textContent);
    span.childNodes[0].textContent = ciafiedText(span.childNodes[0].textContent);
});


/**
var a = $x("//ul[@class='uiMenuInner']/li[@class='uiMenuItem uiMenuItemRadio uiSelectorOption fbPrivacyAudienceSelectorOption']//span[@class='itemLabel fsm']");
var a = $x("//div[@id='composerTourAudience']//ul[@class='uiMenuInner']/li[contains(@class, 'uiMenuItem') and contains(@class, 'uiMenuItemRadio') and contains(@class, 'uiSelectorOption') and contains(@class, 'fbPrivacyAudienceSelectorOption')]//span[@class='itemLabel fsm']");
**/

})();
