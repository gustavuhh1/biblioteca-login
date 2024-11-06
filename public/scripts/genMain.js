import registerHUD from "./registerHUD.js";
import {btnEntrar, form} from "./loginUser.js";

const registerBtn = document.querySelector('#register');
const slogan = document.querySelector('p');
console.log(form);


registerBtn.addEventListener('click', e => {
    e.preventDefault();
    form.style.display = 'none';
    slogan.style.display = 'none';
    registerHUD(); 
})

export default registerBtn