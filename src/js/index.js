jQuery(document).ready(function() {
    // добавление белого бэкграунда меню
    let nav = $('.navbar');
    $(window).scroll(function() {
        if ($(window).scrollTop()>100) {
            nav.addClass('nav-white');
            nav.addClass('fixed-top');            
        } else {
            nav.removeClass('nav-white');
            nav.removeClass('fixed-top');
        }
    })
})