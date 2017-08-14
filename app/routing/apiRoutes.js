//append routes
var express = require('express');
var router = express.Router();
var path = require("path");

router.post('/api/friends', function(req, res) {
    var newFriend = req.body;    
    var surveyScore;
    var officeScore;
    var result = 0;
    var pointsAccum = 0;
    var winner = 0;

    for (var j=0; j < friends.length; j++) {
    result = 0;
     for (var i=0; i < 10; i++) {
        officeScore = newFriend.scores[i];
        eval("surveyScore = friends["+j+"].a"+1)+";";
        result += Math.abs(officeScore-surveyScore);
        if (j === 0 || result < pointsAccum) {
            pointsAccum = result;
            winner = j;
        } 
     }
    }
    res.json(friends[winner]);
});

module.exports = router;