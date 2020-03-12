'use strict';

function makeCounter (startValue, step) {
    let item = startValue;
    return function () {
        return item += step;
    };
}

const counterBtn = document.querySelector('.counter-btn');
const clearBtn = document.querySelector('.clear-btn');
const divValue = document.querySelector('.value');

const counter = makeCounter(0, 3); // eslint-disable-line
// const ccounter = makeCounter(0, 0); // eslint-disable-line
counterBtn.addEventListener('click', () => {
    divValue.textContent = 'likes: ' + counter();
});
// clearBtn.addEventListener('click', () => {
//     makeCounter.item = '';
// });
