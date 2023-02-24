var express = require("express");
var app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
var routes = require("./routes/route.js");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
  const newUser = await prisma.users.create({
    data: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  });
  const users = await prisma.users.findMany();
  res.send(users);
});

app.get("/test", (req, res) => {
  res.send("Hello world 123");
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function (req, res) {
  console.log("Catch the action at http://localhost:" + port);
});
