$(window).on('load', function () {
    $('html, body').animate({ scrollTop: 0 });
    setInterval(function () {
        $(".mrotate").addClass('done');  
    }, 2500)
})
$(document).ready(function () {
    var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
    // Start Scroll_Up----------------------------------------------
    $('.scrollup').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500);
        $(this).css({ "color": "white" })
        audio.play();
        return false;
    });
    $(window).scroll(function(){
     if($(this).scrollTop()>=2550)   {
        $("#designchange ul li").css({ "animation-name": "flipInX", "animation-duration": "1s", "visibility": "visible" })
     }
     if($(this).scrollTop()>100)   {
        $(".scrollup").css({ "animation-name": "flipInX", "animation-duration": "1s", "display": "block" })
     }
     else{
        $(".scrollup").css({"display": "none" }) 
     }
    })
});