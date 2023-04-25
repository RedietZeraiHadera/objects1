let person = {
    name:'Ann',
    age:25,
    introduce:function(){
        console.log('Hello');
        console.log(`Hello my name is ${this.name}`)

    }
}
person.introduce();
person.greet = function(){//won't work on arrow functions
    console.log('How you doing?');
    console.log(`I am ${person.name}`);
}
person.greet();