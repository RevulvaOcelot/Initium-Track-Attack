// ==UserScript==
// @name         Attack Counter
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  It farms gold in initium while you sleep
// @author       https://github.com/RevulvaOcelot/
// @match        *http://www.playinitium.com/*
// @match        *https://www.playinitium.com/*
 
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==



function setAttack(charName, attacks) {
    GM_setValue(charName+'Attacks', attacks);
}

(function() {
    'use strict';
    var charName = $('.hint').text();
    var attacks = GM_getValue(charName+'Attacks', 0);

    var loc = document.title == "Combat - Initium";
    $('body').prepend('<div id="displayDiv" style="float: left;"><i id="attackDisplay"  style=""> Attacks: ' + attacks + ' </i>  <button id="resetAttacks"  style=""> Reset Counter </button></div>');
    $('#resetAttacks').on('click', function(e) {e.preventDefault(); attacks = 0; setAttack(charName, attacks); $('#attackDisplay').text('Attacks: '+ attacks);});
    // If location is a combat site;
    if(loc) {
        // //Hotkey: 2. Use this if you want, but it's pretty buggy.
        // $(document).bind('keyup', function(e) {
        // if (e.keyCode == 50) {
        //     attacks += 1;
        //     GM_setValue('attacks', attacks);
        // }
        // return false;
        // });
        $('.main-button').on('click', function(e) {
           e.preventDefault();
           if(($(this).attr('shortcut') == 49) || ($(this).attr('shortcut') == 50)) {
                attacks += 1;
                setAttack(charName, attacks);
           }
        });
    }

    // Your code here...
})();