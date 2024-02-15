'use strict';

const container = document.querySelector('.hey');

const loadText = function () {
  const email = localStorage.getItem('email');
  if (email) {
    const html = `<p class="margin__b-l">A confirmation email has been sent to
    <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.</p>`;

    container.insertAdjacentHTML('beforeend', html);
  }
};

const insertText = function () {
  loadText();
  localStorage.clear();
};

document.addEventListener('DOMContentLoaded', insertText);
