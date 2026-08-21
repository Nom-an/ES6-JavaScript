// map
const students = [
    { id: 1 ,name:'abul' , marks:50 },
    { id: 2 ,name:'kabul' , marks:50 },
    { id: 3 ,name:'habul' , marks:50 },
    { id: 4 ,name:'tabul' , marks:50 },
    { id: 5 ,name:'dabul' , marks:58 },
]

const names = students.map(student=> student.name);
console.log(names);

const marksStudent = students.map(m=> m.marks);
console.log(marksStudent);

//filter

const marks50 = students.filter(f=> f.marks === 50);
console.log(marks50);

//find

const firstStudent = students.find(ff=> ff.id === 1);
console.log(firstStudent);
