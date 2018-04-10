const express = require("express");
const expressNunjucks = require("express-nunjucks");
const app = express();
const isDev = app.get("env") === "development";

app.set("views", __dirname + "/views");

const njk = expressNunjucks(app, {
  watch: true,
  noCache: true
});

app.get("*", (req, res) => {
  res.render("index");
});

app.listen(8080);
