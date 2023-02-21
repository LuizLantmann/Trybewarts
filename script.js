const emailInput = document.querySelector('#email');
const pwdInput = document.querySelector('#password');
const loginBtn = document.querySelector('#btn-login');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (emailInput.value === 'tryber@teste.com' && pwdInput.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});
