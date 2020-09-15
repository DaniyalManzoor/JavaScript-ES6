// Function Composition

// idea of functional programming to write bunch of small
// and reusable function and then compose them to build more
// complex function for solving real world problem

let input = "   JavaScript    ";

// none functional style of code
let output = "<div>" + input + "</div>";

//Problem
// trim
//wrapInDiv

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;

const defaultresult = wrapInDiv(trim(input));

//convert string into lowercase
const lowerCase = (str) => str.toLowerCase();

const lowercaseResult = wrapInDiv(lowerCase(trim(input)));
