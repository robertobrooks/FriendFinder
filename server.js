// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var routes = require('./app/routing/htmlRoutes');
//var api = require('./app/routing/apiRoutes');

app.use('/', routes);
//app.use('/api/friends', api);

class friend {
    constructor(n, p, e, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        this.name = n;
        this.photo = p;
        this.a0 = a0;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.a15 = a5;
        this.a6 = a6;
        this.a7 = a7;
        this.a8 = a8;
        this.a9 = a9;
        this.a0 = a0;
    }
};

var friends = [];
var michael = new friend("Michael Scott", "https://vignette2.wikia.nocookie.net/theoffice/images/0/02/Michael_Scott.jpg/revision/latest/scale-to-width-down/350?cb=20170701090332", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
var kelly = new friend("Kelly Kapoor", "https://vignette2.wikia.nocookie.net/theoffice/images/6/69/Kelly_Kapoor.jpg/revision/latest/scale-to-width-down/1000?cb=20170701090501", 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);
var jim = new friend("Jim Halpert", "https://vignette1.wikia.nocookie.net/theoffice/images/9/9a/Jim.jpg/revision/latest/scale-to-width-down/1000?cb=20170701084550", 3, 3, 3, 3, 3, 3, 3, 3, 3, 3);
friends.push(michael);
friends.push(kelly);
friends.push(jim);


app.post('/api/friends', function(req, res) {
    var newFriend = req.body;

    var addFriend = new friend(newFriend.name, newFriend.photo, newFriend.q1, newFriend.q2, newFriend.q3, newFriend.q4, newFriend.q5, newFriend.q6, newFriend.q7, newFriend.q8, newFriend.q9, newFriend.q10);
    friends.push(addFriend);
    res.json(friends[1]);

    //handle incoming survey results. This route will also be used to handle the compatibility logic.
    //res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});