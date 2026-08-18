const number = [1,2,424,43,2,3]

for (const num of number){
    console.log(num);
}

const employee = {
    name:'Ranib khan',
    designation: 'developer',
    salary:20000,
    experience: '1',
    age: '25'
}

for(const key in employee){
    const value = employee[key];
    console.log(key,value);
}