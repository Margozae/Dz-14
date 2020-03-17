'use strict';

function makeCounter (startValue, step = 1 ) {  // eslint-disable-line
    let item = startValue;
    function counter () {
        return item += step;
    }
    counter.clear = function() {
        item = +'';
    };
    return counter;
}

const counterBtn = document.querySelector('.counter-btn');
const clearBtn = document.querySelector('.clear-btn');
const divValue = document.querySelector('.value');

const counter = makeCounter(0, 3); // eslint-disable-line
counterBtn.addEventListener('click', () => {
    divValue.textContent = 'likes: ' + counter();
});
clearBtn.addEventListener('click', () => {
    divValue.textContent = counter.clear();
});
