//Main JavaScript File

//Custom on click ripple effect
var sdmn = 0;
function eradicate(target) {
    $('#sdmn' + target + '').remove();
}
$(document).click(function (x) {
    sdmn++;
    $('body').append("<div class='ripple' style='left: " + x.pageX + "px;top: " + x.pageY + "px' id='sdmn" + sdmn + "'></div>");
    setTimeout(eradicate, 300, sdmn);
});

//Project cards parallax image config. To make changes refer to ScrollMagic documentation online, and to add more
//parallax boxes to controller, copy past new ScrollMagic.Scene() from below and change triggerElement and setTween to
//ID of new element
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
new ScrollMagic.Scene({triggerElement: "#parallax1"})
    .setTween("#parallax1 > div", {y: "100%", ease: Linear.easeNone})
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#parallax2"})
    .setTween("#parallax2 > div", {y: "100%", ease: Linear.easeNone})
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#parallax3"})
    .setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#parallax4"})
    .setTween("#parallax4 > div", {y: "100%", ease: Linear.easeNone})
    .addTo(controller);

//Array initialized for gallery extension and rectifier
var agilities = new Array($('.gallery-contain').length).fill(0);

//Main JQuery
$(document).ready(function () {


    //Initializes all images for project cards
    for (var mgk = 0; mgk < $('.gallery-pictures').length; mgk++) {
        var bumboy = $('.gallery-pictures').eq(mgk).children();
        if (mgk % 2 == 1) {
            bumboy.css({"right": "0"});
            $('section i').eq(mgk).toggleClass("swerve");
        }
        else
            bumboy.css({"left": "0"});
    }

    //Testimonials slider settings config. Refer to owl carousel documentation online to make changes
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

    //Custom slider buttons, change inner HTML to change shape/SVG (Not in owl documentation)
        $('.owl-prev').html("<i class=\"material-icons\">arrow_back_ios</i>");
        $('.owl-next').html("<i class=\"material-icons\">arrow_forward_ios</i>");

    //Testimonial slider height rectifier

            var xix = $('.main-content').position().top + $('.main-content').height() + 60;
            if ($(window).height() > 1140)
                xix += 100;
            $('.owl-carousel').css("top", xix + "px");


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

    //Custom on click image expansion
    $('.gallery-pictures').on('click', 'img', function () {
        var boonk = $(this).attr('src');
        $('.image-focused').attr('src', "" + boonk + "");
        $('.image-focus').slideToggle(300);
        $('.image-focused').toggleClass("reveal");
    });
    $('.image-focus').click(function () {
        $('.image-focus').slideToggle(300);
        $('.image-focused').toggleClass("reveal");
    });

    //Custom on click gallery extension
    $('section span').click(function () {
        $(this).toggleClass("active");
        $(this).find('i').toggleClass("swerve");
        var xqc = $('.gallery-info').width() + 75;
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
                soon.eq(v).css("" + ksi + "", "" + xqc + "px");
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


    //Removes pre-loader once page is fully loaded
    $('.pre-load').toggleClass("loaded");
    setTimeout(function () {
        $('.pre-load').hide(0);
    },1500);


});

//Custom on re-size gallery extension rectifier function
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
                gen.eq(sen).css("" + ksi + "", "" + nin + "px");
                nin += gen.eq(sen).width() + 75;
            }
        }
    }
}

//On window re-size functions execution
$(window).resize(function () {

    //Testimonial slider height rectifier on window resize

        var xix = $('.main-content').position().top + $('.main-content').height() + 60;
        if ($(window).height() > 1140)
            xix += 100;
        $('.owl-carousel').css("top", xix + "px");


    //Gallery images extension rectifier call
    setTimeout(rectifier, 500, agilities);
});
