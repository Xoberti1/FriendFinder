// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("./data/friends.js")
var htmlRoutes = require("./routing/htmlRoutes.js")
var apiRoutes = require("./routing/apiRoutes.js")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3002;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
//==============================================================
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);
//friends();
var newfriend;


// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT || PORT, function () {
    console.log("App listening on PORT " + process.env.PORT || PORT);
});
