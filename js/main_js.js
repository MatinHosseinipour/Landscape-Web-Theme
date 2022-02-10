AOS.init()
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 5) {
            $(".bg-dark").css("background" , "rgba(52, 58, 64, 1)");
        }

        else{
            $(".bg-dark").css("background" , "rgba(52, 58, 64, 0.5)");
        }
    })
})
$(window).scroll(function(){
    $(".header").css("opacity", 1 - $(window).scrollTop() / 500);
});
function place_ORder()
{
    location.href = "#top";
}
