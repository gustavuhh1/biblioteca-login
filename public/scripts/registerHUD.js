"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function registerHUD() {
  var hud = document.querySelector('.entradas');
  var register = document.createElement('div'); // Cria a div
  register.className = 'register';
  var labelUser = document.createElement('label'); // Cria a label do usuário
  labelUser.className = 'koh-santepheap-light';
  labelUser.textContent = "Crie seu login:";
  var userInput = document.createElement('input'); // Input para criar usuário
  userInput.className = 'koh-santepheap-light';
  userInput.id = 'registerConfirm';
  userInput.value = '';
  var labelPassword = document.createElement('label'); // Cria a label da senha
  labelPassword.className = 'koh-santepheap-light';
  labelPassword.textContent = "Crie sua senha:";
  var passwordInput = document.createElement('input'); // Input para criar senha
  passwordInput.className = 'koh-santepheap-light';
  passwordInput.id = 'password';
  passwordInput.type = 'password';
  passwordInput.value = '';
  var labelConfirmPassword = document.createElement('label'); // Cria a label da confirmação de senha
  labelConfirmPassword.className = 'koh-santepheap-light';
  labelConfirmPassword.textContent = "Confirme sua senha:";
  var confirmPasswordInput = document.createElement('input'); //Input para criar confirmação de senha
  confirmPasswordInput.className = 'koh-santepheap-light';
  confirmPasswordInput.id = 'passwordConfirm';
  confirmPasswordInput.type = 'password';
  confirmPasswordInput.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
      // Evento para enviar registro - btn !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      var username = userInput.value;
      var password = passwordInput.value;
      var confirmPasswordInputValue = confirmPasswordInput.value;
      if (username.length >= 3 && password.length >= 1 == confirmPasswordInputValue.length >= 1 && password == confirmPasswordInputValue) {
        // Se tiver tudo nos conformes, podemos iniciar o registro

        var usuario = {
          "username": username,
          "password": password,
          "token_digit": "1234"
        };
        fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // Informando que o conteúdo é JSON
          },
          body: JSON.stringify(usuario) // Convertendo o objeto para string JSON
        }).then(function (response) {
          return response.json();
        }) // Caso a resposta seja bem-sucedida, converte para JSON
        .then(function (data) {
          return console.log('Resposta do servidor:', data);
        }); // Manipula os dados recebidos)
      } else {
        // Caso não dê certo, guia o usuário para registrar-se com sucesso

        var p = document.createElement('p');
        p.textContent = "Tente novamente!\n                O usu\xE1rio precisa ter ao menos 3 caracteres.\n                As senhas precisam ser iguais.";
        p.style.textAlign = 'center';
        userInput.addEventListener('focus', function () {
          return hud.removeChild(p);
        });
        passwordInput.addEventListener('focus', function () {
          return hud.removeChild(p);
        });
        confirmPasswordInput.addEventListener('focus', function () {
          return hud.removeChild(p);
        });
        hud.append(p);
      }
    }
  });
  var createBtn = document.createElement('button'); // Botão para enviar registro 
  createBtn.className = "koh-santepheap-regular";
  createBtn.textContent = "Registrar-me";
  createBtn.addEventListener('click', function () {
    // Evento para enviar registro - btn !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var username = userInput.value;
    var password = passwordInput.value;
    var confirmPasswordInputValue = confirmPasswordInput.value;
    if (username.length >= 3 && password.length >= 1 == confirmPasswordInputValue.length >= 1 && password == confirmPasswordInputValue) {
      // Se tiver tudo nos conformes, podemos iniciar o registro

      var usuario = {
        "username": username,
        "password": password,
        "token_digit": "1234"
      };
      fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Informando que o conteúdo é JSON
        },
        body: JSON.stringify(usuario) // Convertendo o objeto para string JSON
      }).then(function (response) {
        return response.json();
      }) // Caso a resposta seja bem-sucedida, converte para JSON
      .then(function (data) {
        return console.log('Resposta do servidor:', data);
      }); // Manipula os dados recebidos)
      alert('Usuário cadastrado com sucesso!');
      hud.removeChild(register);
      var form = document.querySelector('form');
      form.style.display = 'flex';
    } else {
      // Caso não dê certo, guia o usuário para registrar-se com sucesso

      var p = document.createElement('p');
      p.textContent = "Tente novamente!\n          O usu\xE1rio precisa ter ao menos 3 caracteres.\n          As senhas precisam ser iguais.";
      p.style.textAlign = 'center';
      hud.append(p);
      userInput.addEventListener('focus', function () {
        return hud.removeChild(p);
      });
      passwordInput.addEventListener('focus', function () {
        return hud.removeChild(p);
      });
      confirmPasswordInput.addEventListener('focus', function () {
        return hud.removeChild(p);
      });
    }
  });
  var backBtn = document.createElement('button');
  backBtn.className = "koh-santepheap-regular";
  backBtn.textContent = "Voltar";
  backBtn.addEventListener('click', function () {
    hud.removeChild(register);
    var form = document.querySelector('form');
    form.style.display = 'flex';
    var slogan = document.querySelector('p');
    slogan.style.display = 'block';
    var inputLogin = document.querySelector('#loginEntrada');
    var passwordEntrada = document.querySelector('#passwordEntrada');
    inputLogin.value = '';
    passwordEntrada.value = '';
  });
  labelUser.appendChild(userInput);
  labelPassword.appendChild(passwordInput);
  labelConfirmPassword.appendChild(confirmPasswordInput);
  register.append(labelUser, labelPassword, labelConfirmPassword, createBtn, backBtn);
  hud.append(register);
}
var _default = exports["default"] = registerHUD;