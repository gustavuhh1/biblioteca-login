import registerHUD from "./registerHUD.js";

const form = document.querySelector('form');
const registerBtn = document.querySelector('#register');
const slogan = document.querySelector('p');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

registerBtn.addEventListener('click', () => {
    form.style.display = 'none';
    slogan.style.display = 'none';
    registerHUD(); 
})

export default registerBtn