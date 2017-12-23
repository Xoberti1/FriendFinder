var path = require("path");
var express = require("express");
var router = express.Router();


    // Basic route that sends the user first to the AJAX Page

    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        console.log("home's here");
    });

    router.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        console.log("survey's on it's way");
    });

//module.exports.HtmlRoutes = HtmlRoutes;
module.exports = router;