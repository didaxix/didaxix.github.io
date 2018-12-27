$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 15000,
        responsive: {
            0: {
                items: 1
            }
        }
    })
    $('.owl-prev').html("<i class=\"material-icons\">arrow_back_ios</i>");
    $('.owl-next').html("<i class=\"material-icons\">arrow_forward_ios</i>");
    var xix = $('.main-content').position().top + $('.main-content').height() + 60;
if($(window).height()>1140)
    xix+=100;
    $('.owl-carousel').css("top", xix + "px");

    var eqo = $('.t-rating');
    for (var x = 0; x < eqo.length; x++) {
        var surefour = eqo.eq(x).html();
        eqo.eq(x).html("");
        for (var y = 1; y <= surefour; y++)
            eqo.eq(x).append("<i class=\"fas fa-star\"></i>");
        if (surefour % 1 > 0)
            eqo.eq(x).append("<i class=\"fas fa-star-half\"></i>");
    }

});
$(window).resize(function () {

    var xix = $('.main-content').position().top + $('.main-content').height() + 60;
    if($(window).height()>1140)
        xix+=100;
    $('.owl-carousel').css("top", xix + "px");


});