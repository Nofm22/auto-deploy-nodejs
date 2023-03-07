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
      username: "ptnminh_",
      password: "123",
      isAuth: 1,
    },
  });
  const users = await prisma.users.findMany();
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("chạy được rồi nè :((( hhuhu");
});

var port = process.env.NODE_ENV === "development" ? 3000 : 3001;

var server = app.listen(port, function (req, res) {
  console.log("Catch the action at http://localhost:" + port);
});
