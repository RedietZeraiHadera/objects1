// create an object 
let person = {
    name:'Ann',
    age:20,
    heigth:'5ft',
    friend:{
        name:'Beryl',
        age:25
    }
}
let person1 = new Object();
console.log(person1);
person1.name = 'Edith';
console.log(person1);
person1.age = 40;
console.log(person1.age);
person['age'] =25;//update an existing property
console.log({person});
console.log(person.friend.age);
delete person.age;
console.log({person});
Object.freeze(person);
person.name ='Henry'
console.log({person});

