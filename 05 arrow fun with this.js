//Arrow function
//Don't rebind this and it will inherit this keyword

const person1 = {
  talk() {
    setTimeout(function () {
      console.log("this", this);
    }, 1000);
  },
};

person.talk();
//we get window object
// this call back function is not a part of this object
// it's a standalone function

const person2 = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};

person2.talk();
