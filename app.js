console.log("web serverni boshlash");
const express = require("express");
const app = express();

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

//Mongodb connect

const db = require("./server").db();

// 1 kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: session code
// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing code
app.post("/create-item", (req, res) => {
  console.log("user entered / create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
   res.json(data.ops[0]);
  });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        // console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;







































// console.log("Web Serverni boshlash");
// const express = require("express");
// const res = require("express/lib/response");
// const app = express();
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// //MongoDB chaqiramiz
// const db = require("./server").db();
// /*ushbu ozgaruvchi mongodb instanceni qolga olib beradi
// bu orqali databasega turli malumotlarni
// yozish/ochirish/oqish... */
// //1.Kirish code
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// //2. Session codes
// //3. Views codes
// app.set("views", "views");
// app.set("view engine", "ejs");

// //4.Routing codes
// app.post("/create-item", (req, res) => {
//   console.log("user entered /create-item");
//   console.log(req.body);
//   const new_reja = req.body.reja;
//   db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end("something went wrong");
//     } else {
//       res.end("succesfully added");
//     }
//   });
// });
// app.get("/", function (req, res) {
//   console.log("user entered /");
//   db.collection("plans")
//     .find()
//     .toArray((err, data) => {
//       if (err) {
//         console.log(err);
//         res.end("something went wrong");
//       } else {
//         // console.log(data);
//         res.render("reja", { items: data });
//       }
//     });
// });
// app.get("/author", (req, res) => {
//   res.render("author", { user: user });
// });

// module.exports = app;