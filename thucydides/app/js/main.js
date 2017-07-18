/*------------------------------------------------------------------
Theme Name: Thucydides
Theme URL: http://perfect5th.com
Author: Perfect5th
Author URI: https://themeforest.net/user/perfect5th
Version: 1.0
License: Regular or Extended from ThemeForest only
Plugin Licenses: GPL or MIT
Last change: Initial release
Primary use: App & Mobile Website 
-------------------------------------------------------------------*/

"use strict";

( function( $ ) {

    $( '.swipebox' ).swipebox();
} )( jQuery );

// This script prevents links from opening in Mobile Safari. https://gist.github.com/1042026
(function(a, b, c) {
	if (c in b && b[c]) {
		var d, e = a.location,
			f = /^(a|html)$/i;
		a.addEventListener("click", function(a) {
			d = a.target;
			while (!f.test(d.nodeName)) d = d.parentNode;
			"href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
		}, !1)
	}
})(document, window.navigator, "standalone")

// Right Sidebar
$('#open-right').sideNav({ // Trigger id
    menuWidth: 280, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

// Left Sidebar
$('#open-left').sideNav({ // Trigger id
    menuWidth: 280, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

// // Sliders
// var swiper = new Swiper('.swiper-slider', { // Default
//     pagination: '.swiper-pagination',
//     paginationClickable: true,
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//     autoplay: false,
//     loop: true,
//     paginationType: 'progress',
//     autoplayDisableOnInteraction: true,
//     parallax: false
// });

var swiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: false
    });

// init swiper layout
window.onload = function () {
    setTimeout(function () {
        ResizeHandler = ResizeHandler || function () { };
        ResizeHandler();
    }, 500)
};

// Add Primary Color To Header After Scroll Down
$(function() {
    //caches a jQuery object containing the header element
    var header = $("#toolbar.transparent");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 350) {
            header.removeClass('transparent').addClass("primary-color");
        } else {
            header.removeClass("primary-color").addClass('transparent');
        }
    });
});

// MixItUP
$(function () {
    var layout = 'grid', // Store the current layout as a variable
        $container = $('#filter'), // Cache the MixItUp container
        $changeLayout = $('#ChangeLayout'); // Cache the changeLayout button
    // Instantiate MixItUp with some custom options:
    try {
        $container.mixItUp('destroy');
    } catch (x) { }
    $container.mixItUp({
        animation: {
            animateChangeLayout: true, // Animate the positions of targets as the layout changes
            animateResizeTargets: true, // Animate the width/height of targets as the layout changes
            effects: 'fade rotateX(-40deg) translateZ(-100px)'
        },
        layout: {
            containerClass: 'grid' // Add the class 'grid' to the container on load
        }
    });
    // MixItUp does not provide a default "change layout" button, so we need to make our own and bind it with a click handler:
    $changeLayout.on('click', function () {
        // If the current layout is a list, change to grid:
        if (layout == 'grid') {
            layout = 'list';
            $changeLayout.text('Grid'); // Update the button text
            $container.mixItUp('changeLayout', {
                containerClass: layout // change the container class to "grid"
            });
            // Else if the current layout is a grid, change to list:  
        } else {
            layout = 'grid';
            $changeLayout.text('List'); // Update the button text
            $container.mixItUp('changeLayout', {
                containerClass: layout // Change the container class to 'list'
            });
        }
    });
});

