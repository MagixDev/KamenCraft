const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use('/assets/css',express.static(__dirname +'/assets/css'));
app.use('/assets/js',express.static(__dirname +'/assets/js'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/minihry", (req, res) => {
  res.sendFile(__dirname + "/games.html")
});

app.get("/hlasovanie", (req, res) => {
  res.sendFile(__dirname + "/vote.html")
});

app.get("/obchod", (req, res) => {
  res.sendFile(__dirname + "/cms.html")
});

app.get("/novinky", (req, res) => {
  res.sendFile(__dirname + "/cms.html")
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/404.html")
});

app.get("/index.js", (req, res) => {
  res.sendFile(__dirname + "/404.html")
}); 

app.listen(process.env.port || 3000);
console.log('Running at Port 3000');