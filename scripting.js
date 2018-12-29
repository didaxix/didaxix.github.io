//Main JavaScript File
//Testimonials slider settings config (refer to owl carousel documentation online to make changes
var sdmn = 0;

function eradicate(target) {
    $('#sdmn' + target + '').remove();
}
document.getElementsByClassName("gallery-pictures")[0].scrollBy(300,0);

$(document).click(function (x) {

    sdmn++;
    $('body').append("<div class='ripple' style='left: " + x.pageX + "px;top: " + x.pageY + "px' id='sdmn" + sdmn + "'></div>");
    setTimeout(eradicate, 300, sdmn);
});


var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

new ScrollMagic.Scene({triggerElement: "#parallax1"})
    .setTween("#parallax1 > div", {y: "90%", ease: Linear.easeNone})
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax2"})
    .setTween("#parallax2 > div", {y: "90%", ease: Linear.easeNone})
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax3"})
    .setTween("#parallax3 > div", {y: "90%", ease: Linear.easeNone})
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax4"})
    .setTween("#parallax4 > div", {y: "90%", ease: Linear.easeNone})
    .addTo(controller);

var agilities = new Array($('.gallery-contain').length).fill(0);
$(document).ready(function () {
    for (var mgk = 0; mgk < $('.gallery-pictures').length; mgk++) {
        var bumboy = $('.gallery-pictures').eq(mgk).children();
        if (mgk % 2 == 1) {
            bumboy.css({"right": "0"});
            $('section i').eq(mgk).toggleClass("swerve");
        }
        else
            bumboy.css({"left": "0"});

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
    if (document.location.pathname.match(/[^\/]+$/)[0] == "index.html") {
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

    }
    $('section span').click(function () {
        $(this).toggleClass("active");
        $(this).find('i').toggleClass("swerve");
        var xqc =  $('.gallery-info').width() + 75;
        var iddqd = $('section span').index(this);
        $('.parallaxParent h1').eq(iddqd).toggleClass("black");
        var soon = $('.gallery-pictures:eq(' + iddqd + ')').children();
        var ksi = "";
        if (iddqd % 2 == 1)
            ksi = "right";
        else
            ksi = "left";

        for (var v = 0; v < soon.length; v++) {
            if (agilities[iddqd] == 0) {
                soon.eq(v).css( "" + ksi + "","" + xqc + "px");
                xqc += soon.eq(v).width() + 75;
            }
            else
                soon.eq(v).css("" + ksi + "", "0");
        }
        if (agilities[iddqd] != 1)
            agilities[iddqd] = 1;
        else
            agilities[iddqd] = 0;
    });
});

function rectifier(agilities) {
    for (var tai = 0; tai < agilities.length; tai++) {

        if (agilities[tai] == 1) {
            var nin = $('.gallery-info').width() + 75;
            var gen = $('.gallery-pictures:eq(' + tai + ')').children();
            var ksi = "";
            if (tai % 2 == 1)
                ksi = "right";
            else
                ksi = "left";

            for (var sen = 0; sen < gen.length; sen++) {
                gen.eq(sen).css("" + ksi + "","" + nin + "px");
                nin += gen.eq(sen).width() + 75;
            }
        }
    }
}

//Testimonial slider height rectifier on window resize
$(window).resize(function () {
    if (document.location.pathname.match(/[^\/]+$/)[0] == "index.html") {
        var xix = $('.main-content').position().top + $('.main-content').height() + 60;
        if ($(window).height() > 1140)
            xix += 100;
        $('.owl-carousel').css("top", xix + "px");
    }
    setTimeout(rectifier, 500, agilities);
});
