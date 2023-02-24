var express = require("express");
var app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
var routes = require("./routes/route.js");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/test", async (req, res) => {
  await prisma.users.create({
    data: {
      username: "Phan Tài Nhật Minh",
      password: "hihihaha",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  });
  const users = await prisma.users.findMany();
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("from phan tai nhat minh with love");
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function (req, res) {
  console.log("Catch the action at http://localhost:" + port);
});
