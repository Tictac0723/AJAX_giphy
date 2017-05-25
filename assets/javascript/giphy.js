var topics = ["Bob's Burgers", "Silicon Valley", "Pretty Little Liars", "Sense 8", "Handmaid's Tale", "Fresh Prince of Belaire", "Game of Thrones", "Criminal Minds", "Friends", "Shameless", "The Office", "Riverdale", "The Unbreakable Kimmy Schmidt", "Sons of Anarchy", "Last Week Tonight", "Black Mirror", "New Girl"];
var image = "";
$(document).ready(function() {

    for (var i = 0; i < topics.length; i++) {
        var button = '<button class="buttons">' + topics[i] + '</button>';
        $('#topics').append(button);
    }

    $("#topics").on("click", ".buttons", function() {
    	$("#images").empty();
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=dc6zaTOxFJmzC&limit=10",
            method: "GET"
        }).done(function(response) {
            for (var i = 0; i < response.data.length; i++) {
                $("#images").prepend('<img src="' + response.data[i].images["original"].url + '">');
            }
        })
    });


});
