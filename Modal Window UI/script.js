'use strict';

//store selected elements in the variable
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const btnModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnModal.length; i++) {
  console.log(btnModal[i].textContent);
}
