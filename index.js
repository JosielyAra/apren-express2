/*const http = require("http");

const server = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader("Content-Type", "text(plain)");
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server on port 3000");
});
*/

const express = require("express");
const morgan = require("morgan");
const {restart} = require("nodemon");
const app = express();

// Settings
app.set('appName', 'Aprendiendo Express');
app.set('port', 3000);
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
/*
app.all("/user", (req, res, next) => {
    console.log("por aqui paso");
    next();
});
*/

app.get('/', (req, res) => {
  const data = [{name: 'jhon'},{name: 'Joel'},{name: 'Cameron'}, {name: 'Luis'}];
    res.render('index.ejs', {people: data});
});

app.get("/user", (req, res) => {
    res.json({username: "Cameron", latname: "Boice"});
});

app.post("/user/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send("PETICION POST");
});
app.put("/user/:userId", (req, res) => {
    console.log(req.body);
    res.send(`User  ${
        req.params.userId
    } update`);
});

app.delete("/user/:id", (req, res) => {
    res.send(`User ${
        req.params.id
    } deleted`);
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log("Server on port", app.get('port'));
});
