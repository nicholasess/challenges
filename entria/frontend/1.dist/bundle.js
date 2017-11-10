webpackJsonp([1],{

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(24);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(82);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var items = _ref.items;
	return _react2.default.createElement(
		'div',
		{ style: style.container },
		_react2.default.createElement(
			'h3',
			null,
			'Lista Geral'
		),
		_react2.default.createElement(
			'ul',
			null,
			items.map(function (item, index) {
				return _react2.default.createElement(
					'li',
					{ style: style.list_item, key: index },
					item.name
				);
			})
		)
	);
};

var style = {
	container: {
		width: '200px',
		margin: '0 auto',
		textAlign: 'center'
	},
	list_item: {
		listStyle: 'none',
		padding: '10px',
		borderBottom: '1px solid #000'
	}
};

/***/ })

});
//# sourceMappingURL=bundle.js.map