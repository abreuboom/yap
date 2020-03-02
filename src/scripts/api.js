export async function fetchTweets() {
  console.log("yummy");

  var Twitter = require("twitter");

  var client = new Twitter({
    consumer_key: "7zwCFhUevJ1M4PLro64swFXXE",
    consumer_secret: "M2UrfNapJViZrfB3s4zWnCOo6jNzoH9SpfRyUllLWyjVfot4SI",
    bearer_token: "AAAAAAAAAAAAAAAAAAAAAMlYCwEAAAAA7iiJsjMZeJF9lpv2S%2BbNCXi6%2Bvc%3D3InbC4iTWw7sXGHb8H7jFejU21Hvk9ydA934sKMBcsCDXW0OF6"
    // access_token_key: "329110363-LjAoK24nv2vFmFckVArqOHu3FrcrBv7v00sHNGDT",
    // access_token_secret: "g50WNEtJJgSWP4HzRkeIjav905SdlvQPsOA7HOgK5Nd4j"
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

  //   const url = "";
  //   const res = await axios
  //   .get(url)
  //   .then(res => setTweets(res))
  //   .catch(err => setErrors(err));
}

fetchTweets();