'use strict';

//first of all list out all elements we are working towards.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');      //querySelectorAll was used to select all the buttons.
console.log(btnOpenModal);



//FUNCTIONS THAT INITIATES DURING THE EVENTS(CLICK OR KEYDOWN)
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


//looping the functionality of the show-modal buttons
for (let i = 0; i < btnOpenModal.length; i++) {
    // btnOpenModal[i].addEventListener('click', function () {
    //     // console.log('button clicked');

    //     //this is used to manipulate classes, can be used to manipulate style classes
    //     modal.classList.remove('hidden');       //no dots in the parentheses, it is only for selectors
    //     overlay.classList.remove('hidden');
    // });
    btnOpenModal[i].addEventListener('click', openModal);
}


btnCloseModal.addEventListener('click', closeModal);        //the parentheses are not added so the function will only be for the click function.

overlay.addEventListener('click', closeModal);  //when we click outside of the box, it will close the modal.

// btnCloseModal.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });


//adding the keyboard events i.e keydown, keypress, keyup(they are global events and it affects all elements)
document.addEventListener('keydown', function (e) {         //putting a parameter in the function and logging out the parameter will bring out the information about the key pressed including it's 'keycode'
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){   //if the parameter 'e' gets the 'key' from the array, it must be equals Escape
                                                                      //if modal does not contains the hidden class(i.e the hidden class was added above to close it and now it must contain the hidden class), then close the modal.
            closeModal();

    }
});




