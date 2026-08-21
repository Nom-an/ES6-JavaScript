const number = [1,2,3,5,6,33,3];

const double =  (num)=>num*2;
const doubled= number.map(double);

console.log(doubled);

const friends = ['rafel', 'kabel', 'notbel'];

const friendsLength = friends.map((s)=>s.length);

console.log(friendsLength);

const numberIndex = number.map((numm,index)=>{
    return numm * index;
})

console.log(numberIndex);


const point = [9,8,7,6,5,4,3,21];

const pointTripple = (p)=> p*3;

const tripple = point.map(pointTripple);
console.log(tripple);