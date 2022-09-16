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
const app = express();
app.use(express.json());

app.all('/user', (req, res,next) => {
  console.log('por aqui paso');
  next();
});

app.get("/user", (req, res) => {
  res.json({
    username: "Cameron",
    latname: "Boice",
  });
});

app.post("/user/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("PETICION POST");
});
app.put("/user/:userId", (req, res) => {
  console.log(req.body);
  res.send(`User  ${req.params.userId} update`);
});

app.delete("/user/:id", (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

app.listen(5000, () => {
  console.log("Server on port 5000");
});
