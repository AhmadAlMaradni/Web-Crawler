var express = require('express');
var app = express();

//require middleware and routes here
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);



//set express to listen to for requests
app.listen(process.env.PORT || 9000, function () {
	console.log('listen for port...9000');
})

module.exports = app;