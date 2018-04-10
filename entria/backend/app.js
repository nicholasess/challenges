require("babel-polyfill");
require("babel-core/register");
const Koa = require("koa");
const mongoose = require("mongoose");
const logger = require("koa-logger");
const route = require("koa-route");
const compress = require("koa-compress");
const app = new Koa();
const Controller = require("./controller");
var bodyParser = require("koa-bodyparser");

app.use(logger());
app.use(bodyParser());
app.use(route.get("/", Controller.get));
app.use(route.post("/", Controller.post));
app.use(route.put("/", Controller.put));
app.use(route.delete("/", Controller.delete));

app.use(compress());

app.listen(3000, () => {
  console.log("Server Ok");
});

mongoose.connect("mongodb://127.0.0.1/my_database");

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão ao DB!!!"));
db.once(
  "open",
  (callback = () => {
    console.log("MongoDB on");
  })
);
