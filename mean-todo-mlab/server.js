var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var todos = require("./routes/todos");
// var index = require("./routes/index");

var port = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false } ));

app.use(express.static(path.join(__dirname, "dist")));

app.use("/api", todos);
// app.use("/", index);

app.listen(port, () => {
    console.log("Server started on port " + port + " ...");
});
