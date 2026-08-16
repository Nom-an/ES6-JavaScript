function sum(num1,num2=10){
    let total = num1+num2;
    console.log(total);

    return total;
}

sum(10,50);

function multiply(number1 , number2){
    const value = number1*number2;
    return value;
}

const tata = multiply(10,10);

console.log(tata);


function fullName(s1, s2= ''){
    const name = s1 + ' ' + s2;
    console.log(name)
}

fullName('Noman');