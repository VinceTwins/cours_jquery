/* eslint-disable no-undef */
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
   


});

$(document).ready(function() {
    $("button").click(function() {
        var myVar = $("#myInput").val(); (sert pour récupérer ce qu'il y a dans un élément)
        console.log(myVar);
        $("#p1").text("Voila mon <b>nouveau</b> text1"); // (change le text en brut)
        $("#p2").html("Voila mon <b>nouveau</b> text2"); // (change le text avec html)
        $("#myInput").val("Voila mon nouveau text"); // (sert à changer ce qu'il y a dans l'élément) 
        $("#p3").attr("..."); // (change l'attribut de l'élément html)
        $("div").append("<p>Un nouveau Paragraphe</p>"); // (ajoute un nouvel élément html à la fin de la div)
        $("div").prepend("<p>Un nouveau premier Paragraphe</p>"); // (ajoute un nouvel élément html au début de la div)
        $("div").after("<p>Un nouveau Paragraphe après la div</p>"); // (ajoute un nouvel élément html après la div)
        $("div").before("<p>Un nouveau Paragraphe avant la div</p>"); // (ajoute un nouvel élément html avant la div)
        $("div").remove(); // (supprime un élément html)
        $("div").empty(); // (vide un élément html)
    });
});

$(function() {
    /*$("#start1").click(function() {
        $("#p1, #p3").addClass("red bold"); // (ajoute une/des classe(s) css aux éléments html)
    });

    $("#start2").click(function() {
        $("#p1").removeClass("red"); // (retire une/des classe(s) css aux éléments html)
    });

    $("#start2").click(function() {
        $("#p1").toggleClass("red"); // (retire ou ajoute une/des classe(s) css aux éléments html)
    });

    $("#start1").click(function() {
        $("#p1, #p3").css("color", "yellow"); // (ajoute du style css directement dans le html)
        console.log($("#p1").css("color")); // (donne le code couleur dans las console de l'élément html)
    });

    $("#start2").click(function() { // ajoute plusieurs style de css (sous forme d'objet avec {}) sur un élément
        $("#p1").css({
            "color": "red",
            "font-size": "1.5em",
            "background-color": "black"
        });
    });

    $("#start1").click(function() {
        $("#start2").width(80); // change la largeur de l'élément
        console.log($("#start1").width()); // récupère et affiche la largeur de l'élément dans la console
    });

    $("#start1").click(function() {
        $("#start2").width(80);
        $("#start2").height(80); // change la hauteur de l'élément
        console.log($("#start1").height()); // récupère et affiche la hauteur de l'élément dans la console
    });

});

$(function() {
    $("#start1").click(function() {
        //$("#p1").css("border-color", "green");
        //$("#p1").parent().css("border-color", "green"); // change le parent direct de l'élément
        //$("#p1").parents().css("border-color", "green"); // change les parents, gd-parents... de l'élément
        //$("#div1").children().css("border-color", "blue"); // change les enfants directs de l'élément
        //$("#main").find("p").css("border-color", "blue"); // change les éléments que l'on cherche dans la function find(), dans l'élément $("...")
        //$("#p1").siblings().css("border-color", "blue"); // change les frères directs de l'élément sans le séléctionner lui même
        //$("#p1").next().css("border-color", "blue"); // change l'élément suivant
        //$("p").first().css("border-color", "blue"); // change le permier élément
        //$("p").last().css("border-color", "blue"); // change le dernier élément
        //$("p").eq(2).css("border-color", "blue"); // change l'élément à la troisième place (index commence à 0)
        //$("p").filter(".cool").css("border-color", "blue"); // change les éléments qui correspondent au filtre
        $("p").not(".cool").css("border-color", "blue"); // change les éléments qui correspondent au filtre


    });

});*/

$(function() {
    $("#start1").click(function() {
        $("#div2").load("demo.txt");
    });
});