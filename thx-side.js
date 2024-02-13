'use strict';

// document.addEventListener('DOMContentLoaded', function () {
//   const loadText = function () {
//     console.log('tekst się zaladowal');
//     const email = localStorage.getItem('email');

//     console.log(email);

//     if (email) {
//       const text = document.querySelector('.thx');
//       // insertEmail(subEmail, text);

//       const html = `<p class="margin__b-l">
//     A confirmation email has been sent to
// <strong>${email}</strong>. Please open it and click the
// button inside to confirm your subscription.
// </p>`;

//       text.insertAdjacentHTML('beforeend', html);
//     }
//   };
//   loadText();
// });

const loadText = function () {
  console.log('tekst się zaladowal');
  const email = localStorage.getItem('email');

  console.log(email);

  if (email) {
    const text = document.querySelector('.hey');
    // insertEmail(subEmail, text);

    const html = `<p class="margin__b-l">
    A confirmation email has been sent to
<strong>${email}</strong>. Please open it and click the
button inside to confirm your subscription.
</p>`;

    text.insertAdjacentHTML('beforeend', html);
  }
};
loadText();
