var fs  = require('fs');
var data = fs.readFileSync('file.json');
var words = JSON.parse(data);

console.log(words);

console.log("Server is starting...");

var express = require('express');

var app =express();

var server = app.listen(3000,listening);