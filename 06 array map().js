//take one at a time and return new item

const colors = ["red", "blue", "green"];

const newColorArray = colors.map((color) => `<li>${color}</li>`);

//Template litteral syntax in es6 `${}`

console.log(newColorArray);
