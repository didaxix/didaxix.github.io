//Main JavaScript File
//Testimonials slider settings config (refer to owl carousel documentation online to make changes


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
    });

//Custom slider buttons, change inner HTML to change shape/SVG (Not in owl documentation
    $('.owl-prev').html("<i class=\"material-icons\">arrow_back_ios</i>");
    $('.owl-next').html("<i class=\"material-icons\">arrow_forward_ios</i>");

//Testimonial slider height rectifier
    if(document.location.pathname.match(/[^\/]+$/)[0]=="index.html") {
        var xix = $('.main-content').position().top + $('.main-content').height() + 60;
        if ($(window).height() > 1140)
            xix += 100;
        $('.owl-carousel').css("top", xix + "px");
    }

//Rating custom auto-star generator
    var eqo = $('.t-rating');
    for (var x = 0; x < eqo.length; x++) {
        var surefour = eqo.eq(x).html();
        eqo.eq(x).html("");
        for (var y = 1; y <= surefour; y++)
            eqo.eq(x).append("<i class=\"fas fa-star\"></i>");
        if (surefour % 1 > 0)
            eqo.eq(x).append("<i class=\"fas fa-star-half\"></i>");
    }

//Custom on-click ripple effect
    var sdmn = 0;
    function eradicate(target){
        $('#sdmn' + target + '').remove();
    }
    $(document).click(function (x) {
        sdmn++;
        $('body').append("<div class='ripple' style='left: " + x.pageX + ";top: " + x.pageY + " ' id='sdmn" + sdmn + "'></div>");
        setTimeout(eradicate, 349,sdmn);
    });
});

//Testimonial slider height rectifier on window resize
$(window).resize(function () {
    if(document.location.pathname.match(/[^\/]+$/)[0]=="index.html") {
        var xix = $('.main-content').position().top + $('.main-content').height() + 60;
        if ($(window).height() > 1140)
            xix += 100;
        $('.owl-carousel').css("top", xix + "px");
    }
});
