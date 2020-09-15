//currying
//we want function for pipe line add(a,b)
//curring is a technique that take a function n argument
//and convert it into 1 argument

//N => 1

function add(a) {
  return function (b) {
    return a + b;
  };
}

// add(1,5) in currying we seperate them into paranthesis
// const add1 = add(1);
// add1(5);

//know that this return function
add(1)(5);

//create using arrow function
const add = (a) => (b) => a + b;
