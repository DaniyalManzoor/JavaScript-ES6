// IMMUTABILITY

// once created object, cannot be changed or mutated.
// if we wanna change that object we have to take a copy
// and then change that copy..

// string in js and most programming lang are mutiable

//const prevent resignment

// Why Immutability
// -- predictability
// -- Faster Changes Detection
// -- concurrency

// should we always favour immutability?
// CON
// -- Performance
// -- Memory overhead

// Practices Immutiability
const person = { name: "Dani" };

// 1 way
// const updated = Object.assign({}, person, {name :"Daniyal", age: 30});
// console.log(updated);

//better way
// const updated = {...person, name:"daniyal", age: 30};

//both way make a shallow copy
//we have to be carefull when working with nested object

const student = {
  name: "Dani",
  address: {
    city: "KHI",
    country: "PK",
  },
};

// const updated = { ...person, name: "Daniyal" };
// updated.address.city = "KGM";
// console.log(student);

//Deep copy

const updated = {
  ...person,
  address: {
    address: {
      ...person.address,
      city: "KGM",
    },
    name: "Daniyal",
  },
};
console.log(person);

//Array

const numbers = [1, 2, 3, 4];
//Adding
const added = [1, ...numbers, 4];

const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 5, ...numbers.slice(index)];

//Removing

const removed = numbers.filter((n) => n !== 2);
console.log(removed);

const updated = number.map((n) => (n === 2 ? 20 : n));
console.log(updated);
