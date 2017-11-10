require("babel-polyfill");
require("babel-core/register");
const Koa = require("koa");
const mongoose = require("mongoose");
const logger = require("koa-logger");
const route = require("koa-route");
const compress = require("koa-compress");
const app = new Koa();
const Controller = require("./controller");

app.use(logger());

app.use(route.get("/", Controller.get));
app.use(route.post("/", Controller.post));
app.use(route.put("/", Controller.put));
app.use(route.delete("/", Controller.delete));

app.use(compress());

app.listen(3000);

//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
