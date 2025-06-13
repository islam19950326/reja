const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
"mongodb+srv://Islamjan:rrABTCvAI8l4vyVD@cluster0.hmcdzz6.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("Error on connection to Mongodb");
    } else {
      console.log("connected to database successfully");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3001;
      server.listen(PORT, function () {
        console.log(
          `the server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);




































// const http = require("http");
// const mongodb = require("mongodb");

// const { toUnicode } = require("punycode");

// let db;
// const connectionString =
//   "mongodb+srv://Islamjan:rrABTCvAI8l4vyVD@cluster0.hmcdzz6.mongodb.net/Reja";

// mongodb.connect(
//   connectionString,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err, client) => {
//     if (err) console.log("ERROR on connection MongoDB");
//     else {
//       console.log("MongoDB connection succeed");
//       module.exports = client;
//       //console.log(client);// database connection object
//       const app = require("./app");
//       const server = http.createServer(app);
//       let PORT = 3000;
//       server.listen(PORT, function () {
//         console.log(
//           `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
//         );
//       });
//     }
//   }
// );





























// "mongodb://atlas-sql-6844ec2d19345916a1312737-7tlpbm.a.query.mongodb.net/Reja?ssl=true&authSource=admin"









// console.log("Web serverni boshlash");
// const express = require("express");
// const res = require("express/lib/response");
// const app = express();
// const http = require("http");


// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.set("views", "views");
// app.set("view engine", "ejs");

// app.post("/create-item", (req, res) => {

// });

// app.get("/", function (req, res) {
//   res.render("harid");
// });

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(`The server is running successfully on port: ${3000}`);
// });






























// const http = require("http");
// const mongodb = require("mongodb");

// let db;
// const connectionString = 
// "mongodb://atlas-sql-6844ec2d19345916a1312737-7tlpbm.a.query.mongodb.net/Reja?ssl=true&authSource=admin"

// mongodb.connect(
//     connectionString,
//     {
//     useNewUrlParser: true,
//      useUnifiedTopology: true,
//     }, 
//     (err, client) => {
//         if(err) console.log("ERROR on connection MongoDB");
//         else {
//             console.log("MongoDB  connection succeed");
//             module.export = client; 
//             const app = require("./app");
//             const server = http.createServer(app);
//             let PORT = 3000;
//             server.listen(PORT, function () {
//             console.log(
//         `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
//         );
//     });
//    }
// }
// )