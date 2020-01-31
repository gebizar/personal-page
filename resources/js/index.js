$(function() {
    // $("#main-content").css({"height": $("window").screen.height() - $("footer").height()});
    // $("#main-content").css({"width": $("header").width()});
    $(".nav-div").css({"width": $(".header-image").width() + 'px'}).css({"margin-left": $(".header-image").offset().left + "px"})
    // $(".header-sticky-container").css({"margin-top": -$(".header-sticky-container").height() + "px"});
    $(".nav-sections").css({"margin-top": $(".header-sticky-container").height() / 4 + "px"})
    $(".header-text").css({"margin-left": $(".header-image").offset().left + "px"})
    $(".header-subtext").css({"margin-left": $(".header-image").offset().left + "px"})
    resizeText();
    $(".header-sticky-container").css({"margin-top": -$(".header-sticky-container").height() + "px"});

   
    $(".setimage").css({"width": "100%"});


    var imageSize = $(".setimage").width()  
    // let sectionBuffer = $(window).height() / 6;
    console.log(imageSize);
    $(".to-set").css({"width": imageSize + "px"});
    $(".nav-sections").css({"margin-bottom": $("footer").height()});
    // $(".to-set").css({"max-height": Math.round(9/16 * imageSize) + "px"})
    

    $('#main-nav li a').click(function(e) {
        var targetHref = $(this).attr('href');
        var stickyOffset = $(".header-sticky-container").height()
        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - stickyOffset
        }, 1000);
        e.preventDefault();
    });

    let fadeStart = 0
    let fadeUntil = $(".header-image").height() * 0.64

    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop();
        var opacity=0;
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();
        let currSec = 0;
        if( offset<=fadeStart ){
            opacity=1;
        }else if( offset<=fadeUntil ){
            opacity=1-offset/fadeUntil;
        }
        $(".header-sticky-container").css({"background-color": "rgba(154, 154, 156, " + (1-opacity) + ")"})
        $(".header-image").css('opacity',opacity).html(opacity);
        $(".nav-sections").children().each(function(){
            var childTop = $(this).offset().top
            var childBottom = childTop + $(this).outerHeight();
            // var childBottom = childTop + 175;

            // if ((childBottom <= windowBottom) && (childTop >= windowTop)) {
            //     console.log($(this).attr("id"))
            //     $(this).addClass("in-view");
            // } else {
            //     $(this).removeClass("in-view");
            // }
            var sectionBuffer = $(this).outerHeight() / 4;
            console.log($(this).attr("id"))
            console.log(childTop, " ", childBottom, " ", windowTop, " ", windowBottom);
            if ((childBottom - sectionBuffer < windowTop) || (childTop + sectionBuffer > windowBottom) || windowTop == 0) {
                $(this).removeClass("in-view");
            } else {
                $(this).addClass("in-view");
            }
        })
    });

    function resizeText() {
        console.log($(window).width())
        var picWidth = $(".header-image").width()
        console.log("Pic Width", picWidth);
        var resizeText = Math.round(picWidth / (960 / 50)) + "px";
        var resizeSubtext = Math.round(picWidth / (960 / 30)) + "px";
        console.log(resizeText);
        $(".header-text").css({"font-size": resizeText}) 
        $(".header-subtext").css({"font-size": resizeSubtext})
    }

    $(window).resize(resizeText);

   

    
});