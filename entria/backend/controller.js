const Model = require("./model");

exports.get = ctx => {
	Model.find().exec((err, data) => {
		console.log(data);
		ctx.body = data;
	});
};

exports.post = ctx => {
	ctx.body = "Hello POST";
};

exports.put = ctx => {
	ctx.body = "Hello PUT";
};

exports.delete = ctx => {
	ctx.body = "Hello DELETE";
};
