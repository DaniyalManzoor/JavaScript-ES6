//object contain method and field

const person={
    name="Daniyal Manzoor",
    walk() { console.loe("Walk")},
    talk() { console.log("Talk")},
}

person.name;
person.name = 'ChangeName';

const target ="name";
person[target] ="ChangeName"