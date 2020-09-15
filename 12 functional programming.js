//JS function are first class Citizen

// Assign to a varaible
// pass as an argument
// return them other function

function sayHello() {
  return "Hello World";
}

// we does not put paranthesis if we put it. it will pass return value
// we pass its reference

let fn = sayHello;
fn();

//Pass as an argument
function greet(fnMessage) {
  console.log(fnMessage);
}
greet(sayHello);

// return function
function returnFun() {
  return function () {
    return "Hello world";
  };
}

//if we call a function we will get function back
let fn = returnFun();
let message = fn();
