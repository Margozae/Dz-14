'use strict';

function makeSum () {
    let value = 0;
    return function (number) {
        return value += number;
    };
}

const sum = makeSum();

sum(3); // eslint-disable-line
sum(5); // eslint-disable-line
sum(20); // eslint-disable-line
