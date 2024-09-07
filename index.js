const express = require("express");

const app = express();
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "Signed in Successfully",
  });
  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  for (let i = 0; i <= users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      res.json({
        message: "Login successfully",
      });
    } else {
      res.json({
        message: "User does not exist",
      });
    }
  }
});

app.listen(3000);
