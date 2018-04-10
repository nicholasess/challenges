const Model = require("./model");
var checkForHexRegExp = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;

exports.get = async ctx => {
  const data = await Model.find().exec();
  ctx.body = { data: data };
};

exports.post = async ctx => {
  if (!!ctx.request.body.title) {
    let usernew = new Model({ title: ctx.request.body.title });
    await usernew.save();
    ctx.body = usernew;
  } else {
    ctx.body = { error: "Title is required" };
  }
};

exports.put = async ctx => {
  const _id = ctx.request.body._id;
  const title = ctx.request.body.title;
  if (checkForHexRegExp.test(_id)) {
    try {
      const data = await Model.findOne({ _id: _id }).exec();
      if (!data) ctx.body = { error: "item not found" };
      await Model.update({ _id: _id }, { $set: { title: title } }).exec();
      ctx.body = "item updated";
    } catch (error) {
      ctx.body = { error: "_id is required" };
    }
  }
};

exports.delete = async ctx => {
  const _id = ctx.request.body._id;
  if (checkForHexRegExp.test(_id)) {
    try {
      await Model.remove({ _id: _id }).exec();
      ctx.body = "item deleted";
    } catch (error) {
      ctx.body = { error: "_id is required" };
    }
  }
};
