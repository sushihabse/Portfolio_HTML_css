$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-bars');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $(this).removeClass('fa-times');
        $('header').removeClass('toggle');
    }
})