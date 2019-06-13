var express = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "adhuss95",
  database: "AGL"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
