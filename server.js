var express = require('express');
var app = express();

app.use('/', express.static(__dirname));


var server = app.listen(9000, function () {
  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);
});