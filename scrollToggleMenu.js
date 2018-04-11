function scrollToggleMenu(header, footer, styleTop, styleBottom, scrollPosition) {

    'use strict';

    var previousScrollPosition = window.pageYOffset;

    window.onscroll = function () {

        var currentScrollPosition = window.pageYOffset;

        if (scrollPosition != "" ||  scrollPosition != null ||  scrollPosition != "undefined") {
            if (previousScrollPosition < scrollPosition) {
                document.querySelector(header).style.top = styleTop;
                document.querySelector(footer).style.bottom = styleTop;
            } else {
                document.querySelector(header).style.top = styleBottom;
                document.querySelector(footer).style.bottom = styleBottom;
            }
            previousScrollPosition = currentScrollPosition;
        }
        else {
            if (previousScrollPosition > currentScrollPosition) {
                document.querySelector(header).style.top = styleTop;
                document.querySelector(footer).style.bottom = styleTop;
            } else {
                document.querySelector(header).style.top = styleBottom;
                document.querySelector(footer).style.bottom = styleBottom;
            }
            previousScrollPosition = currentScrollPosition;
        }
        console.log("Previous: " + previousScrollPosition + ", Current: " + currentScrollPosition);
    }
}