var topics = ["Bob's Burgers", "Silicon Valley", "Pretty Little Liars", "Sense 8", "Handmaid's Tale", "Fresh Prince of Belaire", "Game of Thrones", "Friends", "Shameless", "Riverdale", "The Unbreakable Kimmy Schmidt"];
var image = "";
var ratings = "";
$(document).ready(function() {


    for (var i = 0; i < topics.length; i++) {
        var button = '<button type="button" class="btn btn-default buttons">' + topics[i] + '</button>';
        $('#topics').append(button);
    }

    $("#topics").on("click", ".buttons", function() {
        $("#output").empty();
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=dc6zaTOxFJmzC&limit=10",
            method: "GET"
        }).done(function(response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                $("#output").prepend('<div class="row rating">' + "Rated: " + response.data[i].rating +  '</div> <div class="row images"><img src="' + response.data[i].images["original"].url + '"></div>' + "<hr>");
            }
        });

    });

    $("#newTopicButton").on("click", function(event) {
        event.preventDefault();
        var topic = $("#newTopic").val();
        topics.push(topic);
        var button = '<button type="button" class="btn btn-default buttons">' + topic + '</button>';
        $('#topics').append(button);
    });

});
