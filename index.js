/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { strictEquals } from './utils.js';

console.table(strictEquals(1, 1));
console.table(strictEquals(NaN, NaN));
console.table(strictEquals(0, -0));
console.table(strictEquals(-0, 0));
console.table(strictEquals(1, '1'));
console.table(strictEquals(true, false));
console.table(strictEquals(false, false));
console.table(strictEquals('water', 'oil'));
