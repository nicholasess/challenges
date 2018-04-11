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
    resolve: async (_, { title }) => {
      const newitem = new Model({ title: title });
      return await newitem.save();
    }
  },
  update: {
    type: GraphModel,
    description: "Atualizando um item",
    args: {
      title: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
      _id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    },
    resolve: async (_, { _id, title }) => {
      const data = await Model.update(
        { _id: _id },
        { $set: { title: title } }
      ).exec();

      return { title: "ok" };
    }
  },
  delete: {
    type: GraphModel,
    description: "Excluindo um item",
    args: {
      _id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    },
    resolve: async (_, { _id }) => {
      await Model.remove({ _id: _id }).exec();
      return { title: "ok" };
    }
  }
};
