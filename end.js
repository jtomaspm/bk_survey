// ==UserScript==
// @name         bkFinish
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.minhabkexperiencia.com/Finish*
// @grant        none
// ==/UserScript==

var delay = 1000;
setTimeout(function() {

    console.log("b4IF");
    if(document.getElementById("finishIncentiveHolder")){
        console.log("IF");
        window.location.href = 'https://www.minhabkexperiencia.com/';
    }

}, delay);