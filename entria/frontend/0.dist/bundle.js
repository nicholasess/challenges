webpackJsonp([0],{

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  width: 200px;\n  margin: 0 auto;\n  text-align: center;\n"], ["\n  width: 200px;\n  margin: 0 auto;\n  text-align: center;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  list-style: none;\n  padding: 10px;\n  border-bottom: 1px solid #000;\n"], ["\n  list-style: none;\n  padding: 10px;\n  border-bottom: 1px solid #000;\n"]);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(104);

var _api2 = _interopRequireDefault(_api);

var _styledComponents = __webpack_require__(105);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var ListItem = _styledComponents2.default.li(_templateObject2);

exports.default = function (_ref) {
  var items = _ref.items;
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      "h3",
      null,
      "Lista Geral"
    ),
    _react2.default.createElement(
      "ul",
      null,
      items.map(function (item, index) {
        return _react2.default.createElement(
          ListItem,
          { key: index },
          item.name
        );
      })
    )
  );
};

/***/ })

});
//# sourceMappingURL=bundle.js.map