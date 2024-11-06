"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var btnEntrar = document.querySelector('#enter');
var form = document.querySelector('form');
btnEntrar.addEventListener('click', function (e) {
  e.preventDefault();
  var inputLogin = document.querySelector('#loginEntrada');
  var passwordEntrada = document.querySelector('#passwordEntrada');
  var usuario = {
    "username": inputLogin.value.trim(),
    "password": passwordEntrada.value.trim()
  };
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // Informando que o conteúdo é JSON
    body: JSON.stringify(usuario) // Convertendo o objeto para string
  }).then(function (response) {
    return response.status;
  }) // Caso a resposta seja bem-sucedida, é feita o login
  .then(function (statusCode) {
    if (statusCode == '200') {
      window.location.href = './pages/library.html';
    } else if (statusCode == "401" || statusCode == "500") {
      // Caso não, 
      alert('Usuário não encontrado!');
      passwordEntrada.value = '';
      inputLogin.focus();
    }
  });
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var inputLogin = document.querySelector('#loginEntrada');
  var passwordEntrada = document.querySelector('#passwordEntrada');
  var usuario = {
    "username": inputLogin.value.trim(),
    "password": passwordEntrada.value.trim()
  };
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // Informando que o conteúdo é JSON
    body: JSON.stringify(usuario) // Convertendo o objeto para string
  }).then(function (response) {
    return response.status;
  }) // Caso a resposta seja bem-sucedida, é feita o login
  .then(function (statusCode) {
    if (statusCode == '200') {
      window.location.href = './pages/library.html';
    } else if (statusCode == "401" || statusCode == "500") {
      // Caso não, 
      alert('Usuário não encontrado!');
      passwordEntrada.value = '';
      inputLogin.focus();
    }
  });
});
var _default = exports["default"] = (btnEntrar, form);