'use strict';

function makeSum () {
    let value = 0;
    return function (number) {
        return value += number;
    }
}

let sum = makeSum();

sum(3);
sum(5);
sum(20);

