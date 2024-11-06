const hud = document.querySelector('.entradas');

function registerHUD() {
    const register = document.createElement('div'); // Cria a div
    register.className = 'register';

    const labelUser = document.createElement('label'); // Cria a label do usuário
    labelUser.className = 'koh-santepheap-light';
    labelUser.textContent = "Crie seu login:";

    const userInput = document.createElement('input'); // Input para criar usuário
    userInput.className = 'koh-santepheap-light';
    userInput.id = 'registerConfirm';


    const labelPassword = document.createElement('label'); // Cria a label da senha
    labelPassword.className = 'koh-santepheap-light';
    labelPassword.textContent = "Crie sua senha:";

    const passwordInput = document.createElement('input'); // Input para criar senha
    passwordInput.className = 'koh-santepheap-light';
    passwordInput.id = 'password';
    passwordInput.type = 'password';

    const labelConfirmPassword = document.createElement('label'); // Cria a label da confirmação de senha
    labelConfirmPassword.className = 'koh-santepheap-light';
    labelConfirmPassword.textContent = "Confirme sua senha:";

    const confirmPasswordInput = document.createElement('input'); //Input para criar confirmação de senha
    confirmPasswordInput.className = 'koh-santepheap-light';
    confirmPasswordInput.id = 'passwordConfirm';
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.addEventListener('keydown', e => {
        if (e.key == "Enter") { // Evento para enviar registro - btn !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            const username = userInput.value;
            const password = passwordInput.value;
            const confirmPasswordInputValue = confirmPasswordInput.value;
    
            if ((username.length >= 3) && (((password.length >= 1) == (confirmPasswordInputValue.length >= 1) && (password == confirmPasswordInputValue)))) { // Se tiver tudo nos conformes, podemos iniciar o registro
              
              const usuario = {
                "username": username,
                "password": password,
                "token_digit": "1234"
            }
            
            fetch('http://localhost:3000/register', {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json', // Informando que o conteúdo é JSON
              },
              body: JSON.stringify(usuario) // Convertendo o objeto para string JSON
            })
              .then(response => response.json()) // Caso a resposta seja bem-sucedida, converte para JSON
              .then(data => console.log('Resposta do servidor:', data)); // Manipula os dados recebidos)
    
            } else{ // Caso não dê certo, guia o usuário para registrar-se com sucesso

                const p = document.createElement('p')
                p.textContent = `Tente novamente!
                O usuário precisa ter ao menos 3 caracteres.
                As senhas precisam ser iguais.`
                p.style.textAlign = 'center'
    
                userInput.addEventListener('focus', e => hud.removeChild(p))
                passwordInput.addEventListener('focus', e => hud.removeChild(p))
                confirmPasswordInput.addEventListener('focus', e => hud.removeChild(p))
                backBtn.addEventListener('click', e => hud.removeChild(p))
                hud.append(p)
            }
        }
    });

    const createBtn = document.createElement('button'); // Botão para enviar registro 
    createBtn.className = "koh-santepheap-regular";
    createBtn.textContent = "Registrar-me"
    createBtn.addEventListener('click', () => { // Evento para enviar registro - btn !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      const username = userInput.value;
      const password = passwordInput.value;
      const confirmPasswordInputValue = confirmPasswordInput.value;

      if ((username.length >= 3) && (((password.length >= 1) == (confirmPasswordInputValue.length >= 1) && (password == confirmPasswordInputValue)))) { // Se tiver tudo nos conformes, podemos iniciar o registro
        
        const usuario = {
          "username": username,
          "password": password,
          "token_digit": "1234"
      }
      
      fetch('http://localhost:3000/register', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', // Informando que o conteúdo é JSON
        },
        body: JSON.stringify(usuario) // Convertendo o objeto para string JSON
      })
        .then(response => response.json()) // Caso a resposta seja bem-sucedida, converte para JSON
        .then(data => console.log('Resposta do servidor:', data)); // Manipula os dados recebidos)

      } else{ // Caso não dê certo, guia o usuário para registrar-se com sucesso

          const p = document.createElement('p')
          p.textContent = `Tente novamente!
          O usuário precisa ter ao menos 3 caracteres.
          As senhas precisam ser iguais.`
          p.style.textAlign = 'center'

          userInput.addEventListener('focus', e => hud.removeChild(p))
          passwordInput.addEventListener('focus', e => hud.removeChild(p))
          confirmPasswordInput.addEventListener('focus', e => hud.removeChild(p))
          backBtn.addEventListener('click', e => hud.removeChild(p))
          hud.append(p)
      }
  }
);
}

export default registerHUD

