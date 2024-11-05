const form = document.querySelector('form');
const registerBtn = document.querySelector('#register');
const slogan = document.querySelector('p');
const hud = document.querySelector('.entradas');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

registerBtn.addEventListener('click', () => {
    form.style.display = 'none';
    slogan.style.display = 'none';
    registerHUD(); 
})


function registerHUD() {
    const register = document.createElement('div'); // Cria a div
    register.className = 'register';

    const labelUser = document.createElement('label'); // Cria a label do usuário
    labelUser.className = 'koh-santepheap-light';
    labelUser.textContent = "Crie seu login:"

    const userInput = document.createElement('input'); // Input para criar usuário
    userInput.className = 'koh-santepheap-light';
    userInput.id = 'registerConfirm'

    const labelPassword = document.createElement('label'); // Cria a label da senha
    labelPassword.className = 'koh-santepheap-light';
    labelPassword.textContent = "Crie sua senha:"

    const passwordInput = document.createElement('input'); //Input para criar senha
    passwordInput.className = 'koh-santepheap-light';
    passwordInput.id = 'passwordConfirm';
    passwordInput.addEventListener('keydown', (e) => { // Evento para enviar registro - input
        if (e.key == "Enter") {
            alert('pelo')
        }
    })

    const createBtn = document.createElement('button'); // Botão para enviar registro 
    createBtn.className = "koh-santepheap-regular";
    createBtn.textContent = "Registrar-me"
    createBtn.addEventListener('click', () => { // Evento para enviar registro - btn
        alert('pelo')
    })


    const backBtn = document.createElement('button'); // Botão para voltar ao menu inicial
    backBtn.className = 'koh-santepheap-regular';
    backBtn.textContent = "Voltar"
    backBtn.addEventListener('click', () => {   // Evento para voltar
        register.style.display = 'none';
        form.style.display = 'flex';
        slogan.style.display = 'block';
    })


    labelUser.append(userInput); // Adiciona o texto ao input do user
    labelPassword.append(passwordInput); // Adiciona o texto ao input da senha
    register.append(labelUser, labelPassword, createBtn, backBtn); // Adiciona tudo na div criada
    hud.append(register); // Envia a div para a interface
}


const padrao = {
    "username": username,
    "password": password
}