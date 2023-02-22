var express = require("express");
var app = express();

var routes = require("./routes/route.js");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello tự deploy được rồi nè mà không biết sao nó chạy được lun á");
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function (req, res) {
  console.log("Catch the action at http://localhost:" + port);
});
