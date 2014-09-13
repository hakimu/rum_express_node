var newrelic = require('newrelic');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.locals.newrelic = newrelic;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req,res){
	res.render('index', {	
	nreum : newrelic.getBrowserTimingHeader()
	});
});

app.listen(5000);
console.log('RUNNING TEST APP');
