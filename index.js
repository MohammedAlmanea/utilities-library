const firstUtil = require('./utilities/first-util');
const secondUtil = require('./utilities/second-util');

let array1 = [1,2,3,4,5,6];
let array2 = [9,8,7];
let array3 = ['H','e','l','l','o'];
let array4 = ['T','h','e','r','e'];

console.log(`Using sum()\n${firstUtil.sum(array2)}`);
console.log(`Using concat()\n${firstUtil.concat(array3,array4)}`);

console.log(`Using lgNum()\n${secondUtil.lgNum(array2)}`);
console.log(`Using cut3()\n${secondUtil.cut3(array1)}`);



