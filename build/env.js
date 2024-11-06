"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = void 0;
var _zod = require("zod");
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var envSchema = _zod.z.object({
  PORT: _zod.z.any(),
  APP_ID: _zod.z.string(),
  JS_KEY: _zod.z.string()
});
var _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error('Erro de variáveis de ambiente.', _env.error.format());
  process.exit(1);
}
var env = exports.env = _env.data;