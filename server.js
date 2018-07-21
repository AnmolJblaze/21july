var Express = require('express');
const PORT = process.env.PORT || 5000;

var Server = Express();
Server.use(Express.static(__dirname + '/dist'))


Server.listen(PORT)