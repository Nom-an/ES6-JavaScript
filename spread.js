const array = [12,42,53,23,6];
console.log(...array);
const h = Math.max(...array);

console.log(h);

const first = [2,1,34,42]
const second = [...first] ;
second.push(155);
console.log(first);
console.log(second);

//array copy 

const num1 = [1,2,3,4];
const num2 = [4,2,4,5];

const allNum = [...num1 ,...num2];
console.log(...allNum);


// object copy by spread operator 

const student = {
    name: 'noman',
    id: '011213100'
}

const oye = {
    designation: 'developer', ...student
}

console.log(oye);