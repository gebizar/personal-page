$(function() {
    $(".nav-div").css({"width": $(".header-image").width() + 'px'}).css({"margin-left": $(".header-image").offset().left + "px"})
    $(".header-sticky-container").css({"margin-top": -$(".header-sticky-container").height() + "px"});
    $(".nav-sections").css({"margin-top": $(".header-sticky-container").height() / 4 + "px"})
    $(".header-text").css({"margin-left": $(".header-image").offset().left + "px"})
    $(".header-subtext").css({"margin-left": $(".header-image").offset().left + "px"})
    resizeText();
    var setfontSize = $(".header-image").width()  

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
            if ((childBottom <= windowBottom) && (childTop >= windowTop)) {
                $(this).addClass("in-view");
            } else {
                $(this).removeClass("in-view");
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