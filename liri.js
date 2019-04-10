require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var moment = require('moment');
moment().format();

var axios = require("axios");

var nodeArg = process.argv;

// have liri take in one of several commands

var commandArray = ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"];

if (nodeArg[2] === commandArray[2]) {
    var movie = nodeArg[3];

    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
        function (response) {

            // console.log(response)
            console.log(response.data.Title);
            console.log("Release year: " + response.data.Year);
            console.log("The movie's IMDB rating is: " + response.data.imdbRating);
            console.log("The movie was produced in: " + response.data.Country);
            console.log("The movie is in: " + response.data.Language);
            console.log("plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    );
} else if (nodeArg[2] === commandArray[0]) {
    var artist = nodeArg[3];
    var endpoint = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(endpoint).then(
        function (res) {
            // console.log(res.data);
            console.log("Artist concert info: ")
            console.log("Artist will be playing at " + res.data[0].venue.name);
            console.log("Artist will play in " + res.data[0].venue.city);
            console.log("date of performance: " + moment(res.data[0].datetime).format("MM-DD-YYYY"));
            
        }
    )
}
