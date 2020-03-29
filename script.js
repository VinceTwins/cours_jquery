/*on peut ecrire la même chose en plus court :
$(function() {
   
});*/

/*$(document).ready(function() {
    $("#start").click(function() {
        $(".square").animate({
            left: "600px",
            opacity: 0.5,
            width: "200px",
            height: "200px",
        }, 5000);
    });
    
    $("#stop").click(function() {
        $(".square").stop();
    });
   


});*/

$(document).ready(function() {
    $("#start").click(function() {
        $(".square").slideUp(3000).slideDown(3000);
    });
});