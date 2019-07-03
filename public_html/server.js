const express = require('express');


const app = express();


const fs  = require('fs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  fs.readFileSync(__dirname + '/index.html' , (err,data) => {
    if(err) {
      console.log("Error occured");
      res.send("Page not found");
    }
  })
  res.sendFile(__dirname + '/index.html'  );
  console.log("Connection to server is a success");
  
})

app.get('/agl/March/movies' , (req,res) => {
  fs.readFile('movies.json', (err,data) => {
    if (err) {
      console.log("Error occured");
    }
    const moviedata = JSON.parse(data);
    res.send(moviedata);
    console.log("Movie data sent successful");

  })
})
app.get('/agl/March/music' , (req,res) => {
  fs.readFile('music.json', (err,data) => {
    if (err) {
      console.log("Error occured");
    }
    const moviedata = JSON.parse(data);
    res.send(moviedata);
    console.log("Music data sent successful");

  })
})
app.get('/agl/March/apps' , (req,res) => {
  fs.readFile('apps.json', (err,data) => {
    if (err) {
      console.log("Error occured");
    }
    const moviedata = JSON.parse(data);
    res.send(moviedata);
    console.log("Apps data sent successful");

  })
})
app.get('/agl/March/magazine' , (req,res) => {
  fs.readFile('magazine.json', (err,data) => {
    if (err) {
      console.log("Error occured");
    }
    const moviedata = JSON.parse(data);
    res.send(moviedata);
    fs.writeFile('file.json',)
    console.log("Magazine data sent successful");

  })
})

app.listen(3003, () => console.log("Connected"));



