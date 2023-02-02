$(function(){
    $('.mobile_menu_bars').click(function(){
        $('.mobile_navbar').addClass("active");
        $('.mobile_close_button').removeClass('active');
        $('body').css('overflow','hidden')
    })
                        
    $('.owl-carousel').owlCarousel({
        margin : 30,
        loop : true,
        dots : false,
        nav : true,
        responsive : {
            0 : {
                items  : 1
            },
            600 : {
                items : 2
            },
            1000 : {
                items : 3
            }
        }
    });
    



})


$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};

$('#number1').jQuerySimpleCounter({end: 276,duration: 2000});
$('#number2').jQuerySimpleCounter({end: 23,duration: 2000});
$('#number3').jQuerySimpleCounter({end: 735,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 4.7,duration: 2500});
