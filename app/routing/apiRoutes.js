//append routes
var express = require('express');
var router = express.Router();
var path = require("path");

router.get('/api/friends', function(req, res) {
    console.log("Hola!");
});

router.post('/api/friends', function(req, res) {
    var newFriend = req.body;

    var addFriend = new friend(newFriend.name, newFriend.photo, newFriend.q1, newFriend.q2, newFriend.q3, newFriend.q4, newFriend.q5, newFriend.q6, newFriend.q7, newFriend.q8, newFriend.q9, newFriend.q10);
    friends.push(addFriend);
    res.json(addFriend);

    //handle incoming survey results. This route will also be used to handle the compatibility logic.
    //res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

module.exports = router;