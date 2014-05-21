$(function() {

    'use strict';

    $('.founder-profile__figure').on('click', function () {
        $(this).toggleClass('founder-profile__figure--info-visible');
    });

    $('.training').on('click', function (e) {
        if (e.target.nodeName === 'H3') {
            $(this).toggleClass('training--info-visible');
        }
    });

    $('.nav__nav-toggle').on('click', function () {
        $(this).next().toggleClass('nav__nav-list--visible');
    });

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    var offset = 220;
    var duration = 500;

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.scroll-top').fadeIn(duration);
        } else {
            $('.scroll-top').fadeOut(duration);
        }
    });

    $('.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    console.log('We are thoughtram.');
});
