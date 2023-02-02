$(function(){
    $('.mobile_menu_bars').click(function(){
        $('.mobile_navbar').addClass("active");
        $('.mobile_close_button').removeClass('active');
    })
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
$('#number2').jQuerySimpleCounter({end: 35,duration: 2000});
$('#number3').jQuerySimpleCounter({end: 47,duration: 2000});

$('#number6').jQuerySimpleCounter({end: 276,duration: 2000});
$('#number7').jQuerySimpleCounter({end: 23,duration: 2000});
$('#number8').jQuerySimpleCounter({end: 735,duration: 2000});
$('#number9').jQuerySimpleCounter({end: 4.7,duration: 2000});