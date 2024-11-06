"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _registerHUD = _interopRequireDefault(require("./registerHUD.js"));
var _loginUser = _interopRequireDefault(require("./loginUser.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var registerBtn = document.querySelector('#register');
registerBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var slogan = document.querySelector('p');
  _loginUser["default"].style.display = 'none';
  slogan.style.display = 'none';
  (0, _registerHUD["default"])();
});
var _default = exports["default"] = registerBtn;