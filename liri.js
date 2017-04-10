 var myProcess = process.argv;

 if (myProcess[2] === "my-tweets") {
     var Twitter = require('twitter');

     var client = new Twitter({
         consumer_key: 'UOUl46Pt4Sxa2RshKPiPJxZxA',
         consumer_secret: '5HzkUtx0WMCj2RdoCY0sQ46TOS3mlg44vglhlheBSLzmfBdskx',
         access_token_key: '176990238-bnLv4RtrUjxyJbqywsgWC3zRmxoCXABy8lXZnOFo',
         access_token_secret: 'X5K0Xcr646aJbAhjrq5nXjYrauK7bLiK0ramV7NSRCJkr'
     });

     var params = {
         screen_name: 'JohnZoshak',
         limit: 10
     };
     client.get('statuses/user_timeline', params, function(error, tweets, response) {
         if (!error) {
             console.log(tweets);
         }
     });

 }

 if (myProcess[2] === "spotify-this-song") {

     var spotify = require('spotify');
     var queryArray = "";

     if (myProcess[3] === undefined) {
         queryArray = "the sign";
     } else {
         for (i = 3; i < myProcess.length; i++) {
             queryArray += myProcess[i] + " ";
         }
     }
     console.log("This is my query array: " + queryArray);

     spotify.search({
         type: 'track',
         query: queryArray
     }, function(err, data) {
         if (err) {
             console.log('Error occurred: ' + err);
             return;
         }

         if (!err) {
             console.log(data.tracks.items[0].artists[0].name); //artist
             console.log(data.tracks.items[0].album.name); //album name
             console.log(data.tracks.items[0].external_urls);
             console.log(data.tracks.items[0].name);
         }

         // Do something with 'data'
     });


 }

 if (myProcess[2] === "movie-this") {

 }

 if (myProcess[2] === "do what it says") {

 }
