var graphql = require("graphql");

module.exports = new graphql.GraphQLObjectType({
  name: "Product",
  fields: {
    _id: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString }
  }
});
