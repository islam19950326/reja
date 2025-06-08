console.log("Web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
try {
    const data = fs.readFileSync("database/user.json", "utf8");
    user = JSON.parse(data);
} catch (err) {
    console.log("ERROR:", err);
}

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", (req, res) => {
    res.send("Item received");
});

app.get("/author", (req, res) => {
    res.render("author", { user });
});

app.get("/", (req, res) => {
    res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});





















































// console.log("Web serverni boshlash");
// const express = require("express");
// const res = require("express/lib/response");
// const app = express();
// const http = require("http");
// const fs = require("fs");


// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if (err) {
//         console.log("ERROR:", err);
//     } else {
//       user = JSON.parse(data);
//     }
// });

// // 1: Kirish code
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // 2: Session code
// // 3: Views code
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 4: Routing code
// app.post("/create-item", (req, res) => {
//     res.send("Item received");
// });

// app.get('/author', (req, res) => {
//     res.render("author", {user: user});
// });

// app.get("/", function(req, res) {
//     res.render("harid");
// });

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function (){
//     console.log(`The server is running successfully on port: ${PORT}`);
// });