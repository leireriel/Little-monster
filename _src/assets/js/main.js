'use strict';

const dialogue = document.querySelector('.first-dialogue_wrapper');

const hide = function(event) {
    dialogue.classList.add('hide-first-dialogue_wrapper');
}

dialogue.addEventListener('click', hide);

