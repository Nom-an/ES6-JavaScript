const student = {
    name: 'noman',
    age: 25,
    family:{
        member:3,
        mother:{
            name:'Chonchol',
            age: 55
        }
        // ,
        // father:{
        //     name: 'Shariful Islam',
        //     age: 57

        // }

    }
    ,
    1:'2',
    'home-address' : 'tangail',
}


console.log(student.family.mother.age);
console.log(student.family.father?.age);