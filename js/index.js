$(function() {
    $("#menu_icon").click(function() {
        fade($("#menu"));

        if($("#menu").hasClass("fade_in")) {
            $("#menu_icon").attr("src", "media/img/menu_icon_close.svg");
        }
        else {
            $("#menu_icon").attr("src", "media/img/menu_icon.png");
        }
    });

    $("#video_icon").click(function() {
        $("#video_player").removeClass("slide_in").addClass("slide_out");
    });

    $(".v_item").click(function() {
        var video_link = $(this).attr("data-link");
        $("#video_player").removeClass("slide_out").addClass("slide_in");
    });

});

function fade(element) {
    console.log(element);
    if(element.hasClass("fade_in")) {
        element.removeClass("fade_in").addClass("fade_out");
        setTimeout(function() {
            element.css("visibility", "hidden");
        }, 400);
    }
    else {
        element.removeClass("fade_out").addClass("fade_in");
        element.css("visibility", "visible");
    }
}