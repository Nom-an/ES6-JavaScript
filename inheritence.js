class Animal {
    constructor(name , age){
        this.name=name;
        this.age=age;
    }

        bark(){
        console.log(`the ${this.name} is barking `);
    }

}



class Dog extends Animal{
         #tin;
    constructor(name , age, breed){

        super(name,age);

        this.breed=breed;
        this.#tin= '12343';

   
    }

    getTin(){
        return this.#tin;
    }


}


class Cat{
    constructor(name, age , color ){
        this.name=name;
        this.age=age;
        this.color=color;
    }

    eat(){
        console.log(`${this.name} is eating `);
    }

    catColor(){
        console.log(`cat color is ${this.color}`)
    }
}
const dog1 = new Dog('husky','coffee');
dog1.bark();

console.log(dog1.getTin());

const cat = new Cat('mini', 1, 'orange');
cat.eat();

cat.catColor();