//function in js is object, we have property and method we can use
const person = {
  name: "Daniyal Manzoor",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk1 = person.walk;
//hit window object if strict mode show undefined
walk1();

const walk2 = person.walk.bind(person);
//bind method bind reference of passing argument
walk2();
