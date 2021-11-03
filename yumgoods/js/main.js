
 
(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(1800).fadeOut("slow");

    });

    $(document).ready(function () {

        //03. Smooth Scroll Initialize
        function smoothScroolInit() {
            $('a').smoothScroll({
                speed: 1000
            });
        }
        smoothScroolInit();

        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 10) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function (event) {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200);
            } else {
                $('.back-to-top').fadeOut(200);
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu, #menu li a').on('click', function () {
            $('.hamburger-menu .line-top').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
            $('#menu').toggleClass('open');
        });


        //Aos Activation
        setTimeout(function(){
            AOS.init({
                duration: 700,
                once: true,
            });
        }, 900);


        //07. testimonial Slider Initialize
        function company_carouselInit() {
            $('.owl-carousel.arrival_carousel').owlCarousel({
                dots: true,
                nav: true,
                loop: true,
                margin: 30,
                stagePadding: 2,
                navText: ['<img src="img/prev-arrow-icon.png" alt="">','<img src="img/next-arrow-icon.png" alt="">'],
                autoplay: false,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }
        company_carouselInit();


        $('.meetimg_active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            dots: true,
            arrows: true,
            asNavFor: '.meet_paraactive',
            prevArrow:'<button type="button" class="slick-prev"><img src="img/prev-arrow-icon.png" alt=""></button>',
            nextArrow:'<button type="button" class="slick-next"><img src="img/next-arrow-icon.png" alt=""></button>'
          });
          $('.meet_paraactive').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.meetimg_active',
            dots: false,
            arrows: false
          });

    });

})(jQuery);