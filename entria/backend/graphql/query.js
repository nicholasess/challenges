const graphql = require("graphql");
const Model = require("../model");
const GraphModel = require("./graphql");

module.exports = {
  item: {
    type: GraphModel,
    args: {
      _id: { type: graphql.GraphQLString }
    },
    resolve: (_, { _id }) => {
      return Model.findOne({ _id: _id }).exec();
    }
  },
  items: {
    type: graphql.GraphQLList(GraphModel),
    resolve: async _ => {
      return await Model.find({}).exec();
    }
  }
};
