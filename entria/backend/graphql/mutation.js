const graphql = require("graphql");
const Model = require("../model");
const GraphModel = require("./graphql");

module.exports = {
  add: {
    type: GraphModel,
    description: "Adicionando um item",
    args: {
      title: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    },
    resolve: (_, { title }) => {
      return { data: "ok" };
    }
  }
};
