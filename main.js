let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

// Добавяне на функционалност към бутона "Вход"
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block'; // Показване на прозореца при клик
});

// Затваряне на прозореца при клик върху X бутона
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

// Затваряне на прозореца при клик върху външния му обект
window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    const menuOverlay = document.getElementById('menu-overlay');

    // Toggle menu overlay when menu icon is clicked
    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    });

    // Hide menu overlay when any link in the overlay is clicked
    menuOverlay.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            navbar.classList.remove('active');
            menuOverlay.classList.remove('active');
        }
    });
});


/*  ---------------------------------------------------
    Template Name: HVAC
    Description: HVAC Car Dealer HTML Template
    Author: Colorlib
    Author URI: https://www.colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Car filter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.car-filter').length > 0) {
            var containerEl = document.querySelector('.car-filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    //Search Switch
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".header__menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*--------------------------
        Testimonial Slider
    ----------------------------*/
    $(".car__item__pic__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*--------------------------
        Testimonial Slider
    ----------------------------*/
    var testimonialSlider = $(".testimonial__slider");
    testimonialSlider.owlCarousel({
        loop: true,
        margin: 0,
        items: 2,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        responsive: {
            768: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });

    /*-----------------------------
        Car thumb Slider
    -------------------------------*/
    $(".car__thumb__slider").owlCarousel({
        loop: true,
        margin: 25,
        items: 5,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false,
        responsive: {

            768: {
                items: 5
            },
            320: {
                items: 3
            },
            0: {
                items: 2
            }
        }
    });

    /*-----------------------
		Range Slider
	------------------------ */
    var rangeSlider = $(".price-range");
    rangeSlider.slider({
        range: true,
        min: 1,
        max: 4000,
        values: [800, 3200],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1] + ".100");
        }
    });
    $("#amount").val("$" + $(".price-range").slider("values", 0) + " - $" + $(".price-range").slider("values", 1) + ".100");

    var carSlider = $(".car-price-range");
    carSlider.slider({
        range: true,
        min: 1,
        max: 4000,
        values: [900, 3000],
        slide: function (event, ui) {
            $("#caramount").val("$" + ui.values[0] + " - $" + ui.values[1] + ".100");
        }
    });
    $("#caramount").val("$" + $(".car-price-range").slider("values", 0) + " - $" + $(".car-price-range").slider("values", 1) + ".100");

    var filterSlider = $(".filter-price-range");
    filterSlider.slider({
        range: true,
        min: 1,
        max: 1200000,
        values: [180000, 1000000],
        slide: function (event, ui) {
            $("#filterAmount").val("[ " + "$" + ui.values[0] + " - $" + ui.values[1] + " ]");
        }
    });
    $("#filterAmount").val("[ " + "$" + $(".filter-price-range").slider("values", 0) + " - $" + $(".filter-price-range").slider("values", 1) + " ]");

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
		Single Product
	--------------------*/
    $('.car-thumbs-track .ct').on('click', function () {
        $('.car-thumbs-track .ct').removeClass('active');
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.car-big-img').attr('src');
        if (imgurl != bigImg) {
            $('.car-big-img').attr({
                src: imgurl
            });
        }
    });

    /*------------------
        Counter Up
    --------------------*/
    $('.counter-num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);