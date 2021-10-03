// ==UserScript==
// @name         IXL Unlimited Practice
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Unlimited practice
// @author       _Anthony
// @match        https://*.ixl.com/*
// @icon         https://www.google.com/s2/favicons?domain=ixl.com
// @grant        none
// ==/UserScript==

(function overwritecookies() {
var uiasds = 'dailyPracticeLimitMath';
var ioxucov = '10'
var xicuvxoc = new Date();
xicuvxoc.setMonth(xicuvxoc.getMonth() + 1);
document.cookie = uiasds +"=" + ioxucov + ";expires=" + xicuvxoc + ";domain=.ixl.com;path=/;secure=true";
document.cookie = "math10QLimitPopoverShown=true"

var dpraclim = 'dailyPracticeLimitMath';
var quesval = '-5000'
var expvar = new Date();
expvar.setMonth(expvar.getMonth() + 1);
document.cookie = dpraclim +"=" + quesval + ";expires=" + expvar
	+ ";domain=.ixl.com;path=/;secure=true";
document.cookie = "math10QLimitPopoverShown=false"

})();