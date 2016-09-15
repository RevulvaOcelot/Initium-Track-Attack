// ==UserScript==
// @name         Attack Counter
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  It farms gold in initium while you sleep
// @author       RevulvaOcelot
// @match        *http://www.playinitium.com/*
// @match        *https://www.playinitium.com/*

// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==




(function() {
    'use strict';
    var attacks = GM_getValue('attacks', 0);
    // var loc = $('.header-location').children('a').text().match('Combat site'); // 
    var loc = document.title == "Combat - Initium";
    $('body').prepend('<div id="displayDiv" style="float: left;"><i id="attackDisplay"  style=""> Attacks: ' + attacks + ' </i>  <button id="resetAttacks"  style=""> Reset Counter </button></div>');
    $('#resetAttacks').on('click', function(e) {e.preventDefault(); attacks = 0; GM_setValue('attacks', attacks); $('#attackDisplay').text('Attacks: '+ attacks);});
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
                GM_setValue('attacks', attacks);
           }
        });
    }

    // Your code here...
})();