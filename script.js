$(document).on('scroll', function(){
    $('h1').css("left", Math.max(1300 - 0.35*window.scrollY, 100) + "px");
})