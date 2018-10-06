$(document).ready(function () {

    // video news slider
    var owl = $('.video-article-gallery');
    owl.owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        responsive : {
            0: {
                items: 1,
            },
            768: {
                items: 2
            }
        }
    });
    $('.NextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.PrevBtn').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    // top news slider
    var owl2 = $('.top-article-gallery');
    owl2.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoplay: false,
    });
    $('.top-article-gallery').find('.article').show();
    var items_count = $('.top-article-gallery').find('.owl-item').length;
    for( var x = 0; x < items_count; x++ ) {
        var cls = "";
        if ( x === 0 ) {
            cls = "active";
        }
        $('.gallery-manage-dots').append("<li class='"+cls+"' data-index='"+x+"'></li>");
    }
    $('.gallery-manage-dots').find('li').click(function () {
        var index = $(this).data('index');
        owl2.trigger('to.owl.carousel', index);
    })
    owl2.on('changed.owl.carousel', function(event) {
        $('.gallery-manage-dots').find('li').removeClass('active');
        $('.gallery-manage-dots').find('li:eq('+event.item.index+')').addClass('active');
    });


    // burger clicked
    $('.top-menu').find('.burger').click(openMenu);

    // search clicked
    $('.top-menu').find('.search').click(openMenu);

    function openMenu(){
        $('.fixed-menu').fadeIn(200);
        $('.close').click(function () {
            $('.fixed-menu').fadeOut();
        });
    }


    // Search

    $('input[name="search-field"]').bind("keyup",function(e){
        if( e.keyCode === 13 ) {
            alert("Search: " + $(this).val());
        }
    });


    // follow

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    $('.follow').click(function () {
        var category = $('select[name="category"]').val();
        var email = $('input[name="email"]').val();
        console.log(category, email);
        if( validateEmail(email) && category ) {
            alert(email);
        }
    });



    // sport articles gallery
    var owl3 = $('.sport-articles-gallery');
    owl3.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
    });

    // scroll to top
    var totop_visible = false;
    window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if( scrolled > 200 ) {
            if( !totop_visible ) {
                $('body').append('<div class="totop"><img src="images/icons/top.svg" alt=""></div>');
                totop_visible = true;

                $('.totop').on('click', function () {
                    $("html, body").animate({ scrollTop: 0 }, "slow");
                });
            }
        } else {
            $('.totop').remove();
            totop_visible = false;
        }
    };
});
