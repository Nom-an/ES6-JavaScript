const {brand, price} = { brand: 'Iphone', price: 500, color: 'blue'};

console.log(brand,price);

// ---------------------------------------
const device = {phone: 'samsung', pp: 14000}

 const  {phone,pp, tt=6} = device;

console.log(phone , pp,tt);

// destructuring on array

const number = [123,53,23,13,54];
const [first,second] = number;

console.log(first,second);