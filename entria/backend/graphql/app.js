var graphql = require("graphql");
const mongoose = require("mongoose");
const query = require("./query");
const mutation = require("./mutation");
const Koa = require("koa");
const mount = require("koa-mount");
const graphqlHTTP = require("koa-graphql");
var queryType = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    ...query
  }
});

var mutationType = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...mutation
  }
});

var schema = new graphql.GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

const app = new Koa();

app.use(
  mount(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  )
);

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
