import mongoose from 'mongoose';
import tweet from './tweetModel';

var Twitter = require('twitter');
var config = require('./config.js');

// exports.getAllTweets = (req, res) => {
//     tweet.find({}, (err, notes) => {
//         if (err) {
//             res.send(err);
//         }

//         res.json(notes);
//     });
// };


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