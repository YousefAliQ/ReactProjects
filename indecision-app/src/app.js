import subtract, {square, add} from  './utils';
import isSenior, {isAdult, canFast} from './person';

console.log('app running!');

console.log(square(4));
console.log(add(4,4));
console.log(subtract(4,4)); // subtract as a default, used for big/main things. (the name does not matter)

console.log(isAdult(17));
console.log(canFast(20));
console.log(isSenior(80));