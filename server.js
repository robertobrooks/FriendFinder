// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var routes = require('./app/routing/htmlRoutes');
//var api = require('./app/routing/apiRoutes');

app.use('/', routes);
//app.use('/api/friends', api);

class friend {
    constructor(n, p, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        this.name = n;
        this.photo = p;
        this.a0 = a0;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.a5 = a5;
        this.a6 = a6;
        this.a7 = a7;
        this.a8 = a8;
        this.a9 = a9;
    }
};

var friends = [];
var michael = new friend("Michael Scott", "https://vignette2.wikia.nocookie.net/theoffice/images/0/02/Michael_Scott.jpg/revision/latest/scale-to-width-down/350?cb=20170701090332", 1, 1, 5, 4, 5, 1, 1, 5, 1, 5);
var kelly = new friend("Kelly Kapoor", "https://vignette2.wikia.nocookie.net/theoffice/images/6/69/Kelly_Kapoor.jpg/revision/latest/scale-to-width-down/1000?cb=20170701090501", 1, 1, 1, 5, 3, 1, 1, 2, 1, 1);
var jim = new friend("Jim Halpert", "https://vignette1.wikia.nocookie.net/theoffice/images/9/9a/Jim.jpg/revision/latest/scale-to-width-down/1000?cb=20170701084550", 2, 1, 4, 3, 4, 1, 5, 3, 1, 1);
var andy = new friend("Andy Bernard", "https://vignette1.wikia.nocookie.net/theoffice/images/b/b5/Andy_Bernard.jpg/revision/latest/scale-to-width-down/1000?cb=20170701084205", 3, 1, 3, 5, 1, 1, 4, 1, 3, 1);
var pam = new friend("Pam Beesly", "https://vignette1.wikia.nocookie.net/theoffice/images/6/67/Pam_Beesley.jpg/revision/latest/scale-to-width-down/1000?cb=20170701084358", 3, 5, 1, 3, 4, 1, 1, 1, 2, 1);
var dwight = new friend("Dwight Schrute", "https://vignette1.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest/scale-to-width-down/1000?cb=20170701082424", 5, 1, 1, 2, 1, 5, 1, 4, 5, 1);

friends.push(michael);
friends.push(kelly);
friends.push(jim);
friends.push(andy);
friends.push(pam);
friends.push(dwight);

app.post('/api/friends', function(req, res) {
    var newFriend = req.body;    
    var surveyScore = 0;
    var officeScore = 0;
    var result = 0;
    var pointsAccum = 0;
    var winner = 0;

    for (var j=0; j < friends.length; j++) {
    result = 0;
     for (var i=0; i < 10; i++) {
        officeScore = newFriend.scores[i];
        eval("surveyScore = friends["+j+"].a"+i)+";";
        result += Math.abs(parseInt(officeScore)-parseInt(surveyScore));
     }
        if (j === 0 || result < pointsAccum) {
            pointsAccum = result;
            winner = j;
        } 
        console.log(pointsAccum);
    }
    res.json(friends[winner]);
});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});