var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

// Settings
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


var connection = mysql.createConnection({
    host: 'xxxxx',
    user: 'xxxxx',
    password: 'xxxxx',
    database: 'xxxxx'
});

// Routes
app.get('/', function(req, res) {
    // Find count od users in DB
    var q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q, function(err, results) {
        if(err) throw err;
        var count = results[0].count;
        res.render('index', {count: count});
    });
});

app.post('/register', function(req, res) {
    var person = {
    email: req.body.email
    };

    connection.query('INSERT INTO users SET ?', person, function(err, result) {
        if(err) throw err;
        res.redirect('/');
    }); 
});


app.listen(3000, function() {
    console.log('App listening on port 3000.');
});
