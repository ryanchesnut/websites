$(function () {
    'use strict'; 
    var animspeed = 900; // animation speed in milliseconds
    var textArea = $(".bigtext");
    var fullHeight = textArea.height() + 20;
    var hideHeight = Math.ceil(fullHeight / 2.5); 
    textArea.css('height', hideHeight); 
    var expand = $('.expand'); 
    var contract = $('.contract'); 
    contract.addClass('hide');

    $('.expand').on('click', function (e) {
        textArea.animate( {
            'height': fullHeight
        }, animspeed); 
        expand.addClass('hide');
        contract.removeClass('hide');
    });

    $('.contract').on('click', function (e) {
        textArea.animate({
            'height': hideHeight
        }, animspeed);
        contract.addClass('hide');
        expand.removeClass('hide');
    });
});