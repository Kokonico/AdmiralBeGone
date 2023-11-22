// @name     AdmiralBeGone
// @namespace N/A
// @version  1.0
// @description kick admiral to the curb
// @author   kokonico
// @match *://*/*
// @grant    none
// ==/UserScript==

// WARNING: DO NOT ADD WEBSITES W/OUT ADMIRAL, IT MAY LAG THEM OUT.

// CONFIG
const repeat_check = 10; // time (in ms) to check for admiral
const sites = ['www.howtogeek.com']; // sites to block admiral on, please include 'www'
// CONFIG

(function() {
 'use strict';

 var trigger = sites;
 // Check if the current site is in the allowedSites array
 if (trigger.includes(window.location.hostname)) {
   var intervalId = setInterval(function() {
       var buttons = document.querySelectorAll('button');
       buttons.forEach(function(button) {
           if (button.textContent.includes('Show me how to disable my blocker')) {
               var parentDiv = button.parentNode.parentNode.parentNode.parentNode;
               parentDiv.remove();
               clearInterval(intervalId); // Stop the interval if a div is deleted
           }
       });
   }, 10);
 }
})();
