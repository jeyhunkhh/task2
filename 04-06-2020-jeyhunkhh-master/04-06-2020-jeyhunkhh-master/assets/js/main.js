$(document).ready(function () {

    if ($('#courses .courses').length) {
        var $grid = $('#courses .courses').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
        });

        $('.filter ul').on('click', 'button', function () {
            $(".filter ul li button.active").removeClass("active");
            $(this).addClass("active");
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    }

    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            center: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    if ($(".back-to-top").length) {
        $(window).scroll(function (e) {
            var scroll = $(window).scrollTop();
            if (scroll > 245) {
                $('.back-to-top').addClass("show");
                $('#nav').addClass("sticky-menu");
            } else {
                $('.back-to-top').removeClass("show");
                $('#nav').removeClass("sticky-menu");
            }
        });

        $(".back-to-top").click(function (e) {
            $('html, body').animate({
                scrollTop: $("html").offset().top
            }, 1000);
        });
    }

    if($(".mobile-nav-toggler").length){
        $(".mobile-nav-toggler").click(function(){
            $(document.body).addClass('mobile-menu-visible');
        });

        $(".mobile-menu .close-btn").click(function(){
            $(document.body).removeClass('mobile-menu-visible');
        });
    }


    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }


    $(window).on('load', function () {
        wowAnimation();
    });
});