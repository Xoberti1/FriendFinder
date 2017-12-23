// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends.js")

// Sets up the Express App
// =============================================================
var app = express();
var router = express.Router();
var PORT = 3000;



// this should get the best friend for the client.
// will have to collect the results and add them to an object as "scores"
// will parse scores and push them to an array.
// will add the numbers in the array together to create a total.
// Compare that total to each of the arrays.
// The smallest difference will result in that friend being provided to the user.
router.get("/friends", function (req, res) {
    res.json(friends);

});

// Create New Characters - takes in JSON input
router.post("/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var totaldifferences = [];
    var newfriend = req.body;
    newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newfriend);

    friends.push(newfriend);

    res.json(newfriend);

    for (var i = 0; i < friends.length; i++) {
        if (newfriend.name != friends[i].name) {
            var result = Math.abs(newfriend.total - friends[i].total);
            console.log(result);
            totaldifferences.push(result + friends[i]);
            console.log(totaldifferences);
        }
    }

    for (var j = 0; j < totaldifferences.length; j++) {
        numbers = totaldifferences[j];
        if (numbers < totaldifferences[0]){
            totaldifferences[0] = numbers;
        }
    }


});

module.exports = router;