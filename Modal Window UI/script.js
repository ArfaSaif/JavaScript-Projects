'use strict';

//export the classes into a file and add or remove classes
//store selected elements in the variable
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const btnModal = document.querySelectorAll('.show-modal');

//constant holds function value
const closeModalHandler = function () {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
};

const openModelHandler = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener('click', openModelHandler);
}

closeModal.addEventListener('click', closeModalHandler);

//click elsewhere outside of modal
// don't write closeModalHandler() in handler because it will immediately call that function
overlay.addEventListener('click', closeModalHandler);

//listen to keyboard events // global events - dont happen on a specific element - happen on document

// happens to every key press
document.addEventListener('keydown', function (event) {
  //which key happened
  //stored in the event
  //javascript creates an object event that contains all that info
  //give function a argument
  // we dont call this funciton, js engine will call it
  if (event.key === 'Escape') {
    closeModalHandler();
  }
});
