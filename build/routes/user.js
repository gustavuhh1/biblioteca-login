"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRoutes = userRoutes;
var _server = require("../server.js");
var _env = require("../env.js");
var _zod = require("zod");
var _node = _interopRequireDefault(require("parse/node.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
_node["default"].initialize(_env.env.APP_ID, _env.env.JS_KEY);
_node["default"].serverURL = 'https://parseapi.back4app.com/';
function userRoutes() {
  return _userRoutes.apply(this, arguments);
}
function _userRoutes() {
  _userRoutes = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _server.app.get('/listAll', /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, reply) {
              var query, users;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    reply.headers({
                      "X-Parse-Application-Id": _env.env.APP_ID,
                      "X-Parse-REST-API-Key": _env.env.JS_KEY
                    });
                    query = new _node["default"].Query('Usuarios');
                    _context.prev = 2;
                    _context.next = 5;
                    return query.find();
                  case 5:
                    users = _context.sent;
                    reply.send(users);
                    _context.next = 12;
                    break;
                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](2);
                    console.error('Usuário não encontrado', _context.t0);
                  case 12:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[2, 9]]);
            }));
            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }());
          _server.app.post('/register', /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request, reply) {
              var createNewUser, _createNewUser$parse, username, password, token_digit, query;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    createNewUser = _zod.z.object({
                      username: _zod.z.string(),
                      password: _zod.z.string(),
                      token_digit: _zod.z.string()
                    });
                    _createNewUser$parse = createNewUser.parse(request.body), username = _createNewUser$parse.username, password = _createNewUser$parse.password, token_digit = _createNewUser$parse.token_digit;
                    query = new _node["default"].Query('Usuarios');
                    query.equalTo('username', username);
                    _context3.prev = 4;
                    _context3.next = 7;
                    return query.first().then(/*#__PURE__*/function () {
                      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(exist) {
                        var user, created;
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              if (exist) {
                                _context2.next = 11;
                                break;
                              }
                              user = new _node["default"].Object('Usuarios');
                              user.set('username', username);
                              user.set('password', password);
                              user.set('token_digit', token_digit);
                              _context2.next = 7;
                              return user.save();
                            case 7:
                              created = _context2.sent;
                              return _context2.abrupt("return", reply.status(201).send({
                                created: created,
                                "msg": "Usu\xE1rio: ".concat(username, " criado com sucesso")
                              }));
                            case 11:
                              throw Error('Usuário existente');
                            case 12:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2);
                      }));
                      return function (_x5) {
                        return _ref3.apply(this, arguments);
                      };
                    }());
                  case 7:
                    _context3.next = 13;
                    break;
                  case 9:
                    _context3.prev = 9;
                    _context3.t0 = _context3["catch"](4);
                    console.log(_context3.t0);
                    reply.status(409).send(_context3.t0);
                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, null, [[4, 9]]);
            }));
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }());
          _server.app.post('/login', /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request, reply) {
              var getLoginInput, _getLoginInput$parse, username, password, query, user, getUser;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    getLoginInput = _zod.z.object({
                      username: _zod.z.string(),
                      password: _zod.z.string()
                    });
                    _getLoginInput$parse = getLoginInput.parse(request.body), username = _getLoginInput$parse.username, password = _getLoginInput$parse.password;
                    query = new _node["default"].Query('Usuarios');
                    query.equalTo('username', username);
                    _context4.prev = 4;
                    _context4.next = 7;
                    return query.first();
                  case 7:
                    user = _context4.sent;
                    _context4.next = 10;
                    return user.get('username');
                  case 10:
                    _context4.t0 = _context4.sent;
                    _context4.next = 13;
                    return user.get('password');
                  case 13:
                    _context4.t1 = _context4.sent;
                    getUser = {
                      "username": _context4.t0,
                      "password": _context4.t1
                    };
                    if (!(!user || password !== getUser.password)) {
                      _context4.next = 19;
                      break;
                    }
                    throw new Error('Usuário não existente/ou Senha inválida');
                  case 19:
                    reply.status(200).send('Login efetuado 😁');
                  case 20:
                    _context4.next = 25;
                    break;
                  case 22:
                    _context4.prev = 22;
                    _context4.t2 = _context4["catch"](4);
                    reply.status(401).send(_context4.t2);
                  case 25:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, null, [[4, 22]]);
            }));
            return function (_x6, _x7) {
              return _ref4.apply(this, arguments);
            };
          }());
          _server.app.put('/resetPassword', /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, reply) {
              var getUserInfos, _getUserInfos$parse, username, password, token_digit, new_password, query, user, getUser, response;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    getUserInfos = _zod.z.object({
                      username: _zod.z.string(),
                      password: _zod.z.string(),
                      token_digit: _zod.z.string(),
                      new_password: _zod.z.string()
                    });
                    _getUserInfos$parse = getUserInfos.parse(request.body), username = _getUserInfos$parse.username, password = _getUserInfos$parse.password, token_digit = _getUserInfos$parse.token_digit, new_password = _getUserInfos$parse.new_password;
                    query = new _node["default"].Query('Usuarios');
                    query.equalTo('username', username);
                    _context5.prev = 4;
                    _context5.next = 7;
                    return query.first();
                  case 7:
                    user = _context5.sent;
                    _context5.next = 10;
                    return user.get('createdAt');
                  case 10:
                    _context5.t0 = _context5.sent;
                    _context5.next = 13;
                    return user.get('username');
                  case 13:
                    _context5.t1 = _context5.sent;
                    _context5.next = 16;
                    return user.get('password');
                  case 16:
                    _context5.t2 = _context5.sent;
                    _context5.next = 19;
                    return user.get('token_digit');
                  case 19:
                    _context5.t3 = _context5.sent;
                    _context5.t4 = new_password;
                    getUser = {
                      "createdAt": _context5.t0,
                      "username": _context5.t1,
                      "password": _context5.t2,
                      "token_digit": _context5.t3,
                      "new_password": _context5.t4
                    };
                    if (!(token_digit !== getUser.token_digit || password !== getUser.password)) {
                      _context5.next = 26;
                      break;
                    }
                    throw new Error("Token de 4 digitos incorreto.");
                  case 26:
                    user.set('password', new_password);
                    _context5.next = 29;
                    return user.save();
                  case 29:
                    response = _context5.sent;
                    reply.send(response);
                  case 31:
                    _context5.next = 36;
                    break;
                  case 33:
                    _context5.prev = 33;
                    _context5.t5 = _context5["catch"](4);
                    reply.status(401).send("Não autorizado." + _context5.t5);
                  case 36:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, null, [[4, 33]]);
            }));
            return function (_x8, _x9) {
              return _ref5.apply(this, arguments);
            };
          }());
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _userRoutes.apply(this, arguments);
}