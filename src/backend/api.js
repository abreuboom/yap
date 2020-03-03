var Twitter = require('twitter');
var config = require('./config.js');

export async function fetchTweets() {
    console.log("yummy");

    var client = new Twitter({
        config
    });

    var params = {
        screen_name: "abbbbreu",
        count: 10
    };

    client.get("favorites/list", params, function (error, tweets, response) {
        if (error) throw error;

        console.log(tweets);
        console.log(response);
    });
}