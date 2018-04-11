function scrollToggleMenu(header, footer, styleTop, styleBottom, scrollPosition) {

    'use strict';

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {

        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos < 10) {
            document.querySelector(header).style.top = styleTop;
            document.querySelector(footer).style.bottom = styleTop;
        } else {
            document.querySelector(header).style.top = styleBottom;
            document.querySelector(footer).style.bottom = styleBottom;
        }
        prevScrollpos = currentScrollPos;
    }
    console.log("Prev: " + prevScrollpos + ", Curr: " + currentScrollPos);
}