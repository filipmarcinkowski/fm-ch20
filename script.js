'use strict';

const subBtn = document.querySelector('.btn-subscribe');
const inputField = document.querySelector('.input');
const showError = document.querySelector('.email__label-error');
const image = document.querySelector('.image');
let email;

// resolusion change if screen smaller than 800px

const resolusion = function () {
  image.src = `./assets/images/illustration-sign-up-${
    window.innerWidth < 800 ? 'mobile' : 'desktop'
  }.svg`;
};

window.onload = resolusion;
window.onresize = resolusion;

// /////////////////////////////////////////////////////

const checkAdress = function () {
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
    console.log('enter your email');
  } else if (!isEmail || !correctEmail) {
    inputField.classList.add('input__error');
    showError.classList.remove('hidden');
    console.log('wrong adress');
  } else if (isEmail && correctEmail) {
    localStorage.setItem('email', inputField.value);
    window.location.href = './thx-side.html';
  }
};

subBtn.addEventListener('click', checkAdress);

inputField.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkAdress();
  }
});
