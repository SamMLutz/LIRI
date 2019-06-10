# LIRI
## Language Interpretation and Recognition Interface

In this project we developed a _Language Interpretation and Recognition Interface_ (LIRI) app. The app is designed to offer up 
certain information based on a given command and an input argument. The app is built to run in Node.js Our three main 
commands are 1."Spotify-this-song" 2. "movie-this" 3. "concert-this". We use various npm packages to gather and call the 
information we need. The Axios package allows us to make calls to the "OMDB API" for our movie reference and the
"Bands in Town API" for our concert informtaion reference. To gather our informtaion for "spotify-this-song" command we used 
the Node-spotify-API package to search for any given song and return informatation relevant to that particular song. To run any 
of our first 3 commands you simply add the command followed by what you are are searching for as process.argv arguments in
Node.js. We also make use of the "dotenv" package to store and call on our spotify credentials, allowing us to access the 
spotify API. For our final command option we have "do-what-it-says". In a separate file in the same folder we have text 
containing one of our other three commands followed by a relevant search parameter saved to "random.txt". Using the "fs." node 
package we grab the information in the random.txt file and use it to call the appropriate LIRI command. In this code we have a
package.json file detailing on relative dependencies for this LIRI app to run. Screenshots can be found in the "images.liri" directory in the LIRI folder.


