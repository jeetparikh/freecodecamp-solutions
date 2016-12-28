var express = require('express');
var fs = require('fs');

var app = express();

function returnJSON() {
    var data = fs.readFileSync(process.argv[3], 'UTF-8');
    return JSON.parse(data);
}

app.get('/books', function(req, res) {
    res.json(returnJSON());
});

app.listen(+process.argv[2]);
