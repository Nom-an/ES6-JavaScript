const employee = {
    name:'Ranib khan',
    designation: 'developer',
    salary:20000,
    experience: '1',
    age: '25'
}
Object.freeze(employee)

delete employee.experience;

employee.location = 'Dhaka';

employee.salary = employee.salary + 5000;

console.log(employee)