'use strict';

const subBtn = document.querySelector('.btn-subscribe');
const inputField = document.querySelector('.input');
const showError = document.querySelector('.email__label-error');
// const text = document.querySelector('.thx');

// const text = document.querySelector('.container__sign-up');

let email;

const checkAdress = function (e) {
  e.preventDefault();
  const input = inputField.value;
  console.log('przycisk został nacisniety');

  const a = input.slice(0, input.indexOf('@')).length;
  const b = input.slice(input.indexOf('@'), input.indexOf('.')).length;
  const c = input.slice(input.indexOf('.'), input.length).length;

  const isEmail = input.includes('@', '.');
  const correctEmail = a >= 1 && b >= 3 && c >= 3;

  if (input === '') {
    inputField.classList.add('input__error');
    showError.classList.remove('hidden');
    console.log('wpisz adres');
  } else if (!isEmail || !correctEmail) {
    inputField.classList.add('input__error');
    showError.classList.remove('hidden');
    console.log('zły adres');
  } else if (isEmail && correctEmail) {
    localStorage.setItem('email', inputField.value);
    window.location.href = './thx-side.html';
  }
};

subBtn.addEventListener('click', checkAdress);
