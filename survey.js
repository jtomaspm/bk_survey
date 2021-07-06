// ==UserScript==
// @name         bkSurvey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.minhabkexperiencia.com/Survey*
// @grant        none
// ==/UserScript==

console.log("b4IF");
var delay = 300;
setTimeout(function() {
    if(document.getElementById("textR041000")){
        document.getElementsByClassName("simpleInput rbl")[1].click();
    }else if(document.getElementById("FNSBlock4600")){
        document.getElementById("R070000").value = 2;
        document.getElementById("R069000").value = 2;
        document.getElementById("R071027").value = 2;
    }else if(document.getElementById("S076000")){
        document.getElementById("S076000").value = "3780-305";
    }else{
        document.getElementsByTagName("input")[0].click();
        var delay = 200;
        setTimeout(function() {
            for(var i = 1; i < document.getElementsByClassName("Inputtyperbl")[0].rows.length; i++){
                document.getElementsByClassName("Inputtyperbl")[0].rows[i].cells[1].getElementsByTagName("input")[0].click();
            }
        }, delay);

    }




}, delay);
var delay = 600;
setTimeout(function() {

    console.log("button");
    document.getElementById("NextButton").click();

}, delay);


var delay = 1000;
setTimeout(function() {

    console.log("b4IF");
    if(document.getElementById("finishIncentiveHolder")){
        console.log("IF");
        window.location.href = 'https://www.minhabkexperiencia.com/';
    }

}, delay);

