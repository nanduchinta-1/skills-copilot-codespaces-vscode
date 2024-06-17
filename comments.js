// Create web server

// Load express module
var express = require('express');
var app = express();

// Load body-parser module
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load mongoose module
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');

// Load comments model
var Comment = require('./models/comments');

// Set up static file directory
app.use(express.static(__dirname + '/public'));

// Set up template engine
app.set('view engine', 'ejs');

// Load index page
app.get('/', function(req, res) {
  res.render('index');
});

// Load comments page
app.get('/comments', function(req, res) {
  Comment.find(function(err, comments) {
    if (err) {
      res.status(500).send({ error: 'Database error' });
      return;
    }
    res.render('comments', { comments: comments });
  });
});

// Create a new comment
app.post('/comments', function(req, res) {
  var comment = new Comment(req.body);
  comment.save(function(err) {
    if (err) {
      res.status(500).send({ error: 'Database error' });
      return;
    }
    res.redirect('/comments');
  });
});

// Start server
app.listen(3000, function() {
  console.log('Server started on http://localhost:3000');
});