// ==UserScript==
// @name         burguerKing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.minhabkexperiencia.com/*
// @grant        none
// ==/UserScript==

var page = document.getElementsByTagName('p')[0].textContent.split(" ")[0];

if(page =="Esta"){
    var delay = 200;
    setTimeout(function() {
        document.getElementById("NextButton").click();
    }, delay);
}
if(page == "Bem") {
    var delay = 200;
    setTimeout(function() {
        document.getElementById("SurveyCode").value = "26980"
        document.getElementById('InputDay').value= 29;
        document.getElementById('InputMonth').value= 11;
        document.getElementById('InputHour').value= 12;
        document.getElementById('InputMinute').value= 10;
var delay = 200;
    setTimeout(function() {
        document.getElementById("NextButton").click();

    }, delay);
    }, delay);
}