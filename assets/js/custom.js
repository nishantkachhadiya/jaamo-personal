//all slider resize windows
$(window).resize(function(){
    news_blog_slider();
    day_slider_index();
    services_main_slider();
    after_before_slider_number();
    category();
});
$(document).ready(function(){
    // WOW js
    new WOW().init();

    //function
    news_blog_slider();
    day_slider_index();
    services_main_slider();
    after_before_slider_number();
    category();

    // Menu Active
    $(".menu-item > li").click(function(){
        $(".menu-item > li").removeClass("menu-active");
        $(this).addClass("menu-active");
    });


    // Mobile Menu Icon
    $('.menu').click (function(){
        $(this).toggleClass('open');
    });


    //Menu Item Active Js
    $(".inner-nav-wrapper ul li").click(function(){
        $(".inner-nav-wrapper li").removeClass("menu-item_active");
        $(this).addClass("menu-item_active");
    });


    // Menu
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $("#menu-wrapper,body,html").toggleClass("is-active");
    });


    //Menu Item Active Js
    $(".mega-menu-inner-wrapper ul li").click(function(){
        $(".mega-menu-inner-wrapper li").removeClass("mega-active");
        $(this).addClass("mega-active");
    });


    // Submenu
    $('.mega-menu-wrapper > a').click(function () {
        if ($(window).width() <= 1199) {
            $(".mega-menu-inner-wrapper").slideToggle();

            $(".hamburger,").click(function(){
                $(".mega-menu-inner-wrapper").slideUp();
            });
        }
    });

    //Home Page Js  Start 
    //Slider 1
    $('.category-slider-inner-owl').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        center:true,
        autoHeight:true,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g transform=\"translate(49.096 75.702) rotate(180)\">\n" +
            "    <path  data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g  transform=\"translate(40 -41.916)\">\n" +
            "    <path data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>"],
        responsive:{
            0:{
                items:2,
                stagePadding:0,
                dots:true,
                 loop:true,
                stagePadding:15,
            },
            768:{
                items:2,
                stagePadding:30,
            },
            992:{
                items:3,
                stagePadding:0,
            },
            1200:{
                items:3,
                stagePadding:160,
            },
            1300:{
                items:3,
                stagePadding:190,
            },
            1500:{
                items:3,
                stagePadding:200,
            },
            1600:{
                items:3,
                stagePadding:230,
            },
             1700:{
                items:3,
                stagePadding:280,
            },
            1900:{
                items:3,
                stagePadding:250,
            }
        }
    });

    //Slider 2
    $('.meiner-mitglieder-wol.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        touchDrag: false,
        mouseDrag: false,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g transform=\"translate(49.096 75.702) rotate(180)\">\n" +
            "    <path  data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g  transform=\"translate(40 -41.916)\">\n" +
            "    <path data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>"],
        responsive:{
            0:{
                items:1,
                dots:true
            },
            600:{
                items:1,
                dots:true
            },
            992:{
                items:1,
                dots:false
            },
            1000:{
                items:1
            }
        }
    });


    
    // Accordion Js
    $('.ct_accordion_lable').click(function(){

        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');
        $(this).toggleClass('ct_visiable');
       /* $(this).parents('.hgf-col').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');*/

        $(this).siblings().find('.ct_accordion_info').slideUp();
        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_info').slideUp();
      /*  $(this).parents('.hgf-col').siblings().find('.ct_accordion_info').slideUp();*/

        $(this).parents('.ct_accordion_wrap').find('.ct_accordion_info').slideToggle();
    });
    
    // footer-fixed menu
    $(".footer-fixed-trigger").click(function(){
        $(".footer-fixed-trigger").toggleClass("active");
        $(".footer-fixed-icon").toggleClass("show");
    });

    // Contact Side bar On Home page
    $('.contact--form-main').hover(
        function () {
            $(this).addClass('active');
            $('.contact--pallate').addClass('active');
        }, 
        function () {
            $(this).removeClass('active');
            $('.contact--pallate').removeClass('active');
        }
    );
    //Home Page Js  End




    // More contain show 
    $('.moreless-button').click(function() {
        $(this).parents('.main_more_text').find('.moretext').slideToggle();
        $(this).parents('.main_more_text').toggleClass('change_design');
        $(this).parents('.main_more_text').find('.slide_toggle_btn').fadeToggle('fast');

        setTimeout(function(){ $('.owl-carousel').trigger('refresh.owl.carousel'); }, 470);

        $(this).parents('.owl-item').siblings().find('.moretext').slideUp('slow');
        $(this).parents('.owl-item').siblings().find('.moreless-button span').text("Mehr dazu");
        $(this).parents('.owl-item').siblings().find('.moreless-button i').removeClass('angle_rotact');

        $(this).parents('.main_more_text').siblings().find('.moretext').slideUp('slow');


        if ($(this).find('span').text() == "Weniger") {
            $(this).find('span').text("Mehr dazu")
            $(this).find('.fa-angle-down').removeClass('angle_rotact');
            
        } else {
            $(this).find('span').text("Weniger");
            $(this).find('.fa-angle-down').addClass('angle_rotact');
        }
    });

    // slider menu js
    $('.slider_menu_section ul li a').click(function () {
        var get_menu = $(this).attr('id');
        $('.' + get_menu).addClass('active').siblings().removeClass('active');

        $(this).addClass('active').parents('li').siblings().find('a').removeClass('active');

        day_slider_index();
    });



    //categary Slider 
    $('.category-slider-inner-owl').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        center:true,
        autoHeight:true,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g transform=\"translate(49.096 75.702) rotate(180)\">\n" +
            "    <path  data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g  transform=\"translate(40 -41.916)\">\n" +
            "    <path data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    //Studio Slider 
    $('.studio_img_slider .owl-carousel').owlCarousel({
        loop:true,
        margin:46,
        nav:true,
        stagePadding: 90,
        dots:false,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g transform=\"translate(49.096 75.702) rotate(180)\">\n" +
            "    <path  data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g  transform=\"translate(40 -41.916)\">\n" +
            "    <path data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>"],
        responsive:{
            0:{
                items:1,
                margin:30,
                stagePadding: 0,
                dots:true,
                loop:false,
            },
            576:{
                items:1,
                margin:20,
            },
            768:{
                items:1,
                margin:30,
                stagePadding: 140,
            },
            992:{
                items:2,
                margin:30,
            },
            1200:{
                items:2,
                margin:30,
            },
            1361:{
                items:2
            }
        }
    })

    //course page Studio Slider 
    $('.course_page_slider .owl-carousel').owlCarousel({
        loop:true,
        margin:68,
        nav:true,
        stagePadding: 120,
        dots:false,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g transform=\"translate(49.096 75.702) rotate(180)\">\n" +
            "    <path  data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g  transform=\"translate(40 -41.916)\">\n" +
            "    <path data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>"],
        responsive:{
            0:{
                items:1,
                margin:30,
                stagePadding: 0,
                dots:true,
                loop:false,
            },
            768:{
                items:1,
                margin:30,
                stagePadding: 140,
            },
            992:{
                items:2,
                margin:30,
            },
            1200:{
                items:2,
                margin:30,
            },
            1361:{
                items:3,
                margin:40,
            },
            1441:{
                items:3,
                margin:50,
            },
            1531:{
                items:3,
            }
        }
    })


    //day slider
    $('.day_slider .owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        dots:false,
        nav:true,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"7.919\" height=\"13.85\" viewBox=\"0 0 7.919 13.85\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M16.778,13.119,11.537,7.882a.986.986,0,0,1,0-1.4,1,1,0,0,1,1.4,0l5.938,5.934a.988.988,0,0,1,.029,1.365l-5.963,5.975a.99.99,0,1,1-1.4-1.4Z\" transform=\"translate(19.166 20.046) rotate(180)\" fill=\"#fff\"/>\n" +
        "</svg>\n","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"7.919\" height=\"13.85\" viewBox=\"0 0 7.919 13.85\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M16.778,13.119,11.537,7.882a.986.986,0,0,1,0-1.4,1,1,0,0,1,1.4,0l5.938,5.934a.988.988,0,0,1,.029,1.365l-5.963,5.975a.99.99,0,1,1-1.4-1.4Z\" transform=\"translate(-11.246 -6.196)\" fill=\"#fff\"/>\n" +
        "</svg>\n"],
        center:true,
        responsive:{
            0:{
                items:1
            },
        }
    })


    //before after slider
    $('#Erfolgsgeschichten_page .before_after_img_slider .owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        touchDrag: false,
        mouseDrag: false,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g transform=\"translate(49.096 75.702) rotate(180)\">\n" +
            "    <path  data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
            "  <g  transform=\"translate(40 -41.916)\">\n" +
            "    <path data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
            "  </g>\n" +
            "</svg>"],
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            576:{
                items:1,
                dots:true,
            },
            768:{
                items:1,
                dots:false,
            },
            992:{
                items:1,
                dots:false,
            }
        }
    });

    

});

//slider function declartion
    function news_blog_slider(){
        var checkWidth = $(window).width();

        var owlPost = $(".news_blog_slider");

        if (checkWidth >= 768) {

            if (typeof owlPost.data('owl.carousel') != 'undefined') {
                owlPost.data('owl.carousel').destroy();
            }

            owlPost.removeClass('owl-carousel owl-theme');

        } else if (checkWidth <= 767) {

            owlPost.addClass('owl-carousel owl-theme');

            owlPost.owlCarousel({
                loop: false,
                margin: 15,
                nav: true,
                autoHeight:true,
                 navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
                "  <g transform=\"translate(49.096 75.702) rotate(180)\">\n" +
                "    <path  data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
                "  </g>\n" +
                "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
                "  <g  transform=\"translate(40 -41.916)\">\n" +
                "    <path data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
                "  </g>\n" +
                "</svg>"],
                responsive:{
                    0:{
                        items:1,
                        dots:true,
                    },
                    576:{
                        items:1,
                    },
                    768:{
                        items:2,
                        dots:false,
                    },
                }
            });
        }
    }

    //services_main slider function declartion
    function services_main_slider(){
        var checkWidth = $(window).width();

        var owlPost = $(".services_main_slider");

        if (checkWidth >= 992) {

            if (typeof owlPost.data('owl.carousel') != 'undefined') {
                owlPost.data('owl.carousel').destroy();
            }

            owlPost.removeClass('owl-carousel owl-theme');

        } else if (checkWidth <= 991) {

            owlPost.addClass('owl-carousel owl-theme');

            owlPost.owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                autoHeight:true,
                 navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
                "  <g transform=\"translate(49.096 75.702) rotate(180)\">\n" +
                "    <path  data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
                "  </g>\n" +
                "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"89.096\" height=\"33.786\" viewBox=\"0 0 89.096 33.786\">\n" +
                "  <g  transform=\"translate(40 -41.916)\">\n" +
                "    <path data-name=\"Path 3764\" d=\"M48.427,57.195l-14.61-14.61a2.283,2.283,0,0,0-3.228,3.228L41.3,56.526H-37.717A2.283,2.283,0,0,0-40,58.809a2.283,2.283,0,0,0,2.283,2.283H41.3L30.589,71.805a2.283,2.283,0,0,0,3.228,3.228l14.61-14.61A2.283,2.283,0,0,0,48.427,57.195Z\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n" +
                "  </g>\n" +
                "</svg>"],
                responsive:{
                    0:{
                        items:1,
                        dots:true,
                    },
                    576:{
                        items:1,
                    },
                    768:{
                        items:2,
                        dots:false,
                    },
                }
            });
        }
    }

    //day_slider_index  slider function declartion
    function day_slider_index(){

        var checkWidth = $(window).width();

        var owl = $('.day_slider');

        owl.on('changed.owl.carousel', function(event) {
            var currentItem = event.item.index;

            var find_item = $(".day_slider .owl-item").eq(currentItem).find('a').attr('id');

            $('.'+ find_item).addClass('active').siblings().removeClass('active');
        })  
    }

    //after_before_slider_number function declartion
    function after_before_slider_number(slideResize){
        setTimeout(function(){ $('.owl-carousel').trigger('refresh.owl.carousel'); }, 1000);

        var owl = $('.before_after_img_slider .meiner-mitglieder-sliders');

        owl.on('changed.owl.carousel', function(event) {
            var totalitem = $('.owl-item:not(.cloned)' ).length;
            var currentItem = event.item.index;

            var new_final_item = currentItem + 1;


            if(new_final_item < 10){
              $('.first_number').text('0'+ new_final_item); 
            }
            else{
                $('.first_number').text(new_final_item);
            }

            if(totalitem < 10){
                $('.sec_number').text('0'+ totalitem); 
            }
            else{
                $('.sec_number').text(totalitem);
            }
        })  
    }


//Category item function declartion
function category(){

    var checkWidth = $(window).width();

     if (checkWidth <= 575) {
    
        var owl = $('.category-slider-inner-owl');

        owl.on('changed.owl.carousel', function(event) {
            var currentItem = event.item.index;
            var find_item = $(".category-slider-inner-owl .owl-stage-outer .owl-stage .owl-item").eq(currentItem).find('.item');
            var find_data_attr = find_item.attr('data-class')

            $('.'+ find_data_attr).addClass('active').siblings().removeClass('active');
        })  
    } 
}
