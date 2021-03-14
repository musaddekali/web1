!(function ($) {
    "use strict";

    // active nav-menu 
    $('.navmenu > ul li, .mobile-nav > ul li').click(function () {
        $('.navmenu > ul li, .mobile-nav > ul li').removeClass('active');
        $(this).addClass('active');
        console.log('added active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        };
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    // Mobile Navigation 
    if ($('.navmenu').length) {
        let $mobile_nav = $('.navmenu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').append('<div class="mobile-nav-overlay"></div>');

        $('#js_nav-toggler').click(function () {
            $(this).toggleClass('h-animate');
            $('body').toggleClass('mobile-nav-active');
            // $('.mobile-nav-overlay').fadeToggle();
        });

        $('.mobile-nav-overlay').click(function () {
            $('#js_nav-toggler').click();
        });

        $('.mobile-nav .drop-down > a').click(function (e) {
            e.preventDefault();
            $(this).next().slideToggle();
        });
    }

    // Back to top 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        };
    });

    $('#back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');

    });

    // Initiate the venobox plugin
    $(window).on('load', function () {
        $('.venobox').venobox();
    });

    // jQuery counterUp
    $('.counter-up').counterUp({
        delay: 10,
        time: 1000
    });

    // Skills Section 
    $('.skill-content').waypoint(function () {
        $('.skill-content .progress-bar').each(function () {
            $(this).css("width", $(this).attr('aria-valuenow') + "%");
        });
    }, {
        offset: '80%'
    });

    // owl-carousel 
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // Portfolio Filters 
    var portfolioIsotope = $('.portfolio-container').isotope({
        layoutMode: 'fitRows'
    });

    $('#portfolio-filters li').click(function () {
        $('#portfolio-filters li').removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
        aos_init();
    });

    // init AOS 
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    $(window).on('load', function () {
        aos_init();
    });

})(jQuery);