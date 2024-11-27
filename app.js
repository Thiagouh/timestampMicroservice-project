var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

var routes = require("./routes");
app.use("/api", routes);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
