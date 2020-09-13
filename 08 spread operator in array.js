const first = [1, 2, 3, 4];
const sec = [5, 6, 7, 8];

//with spread operator
const combined = first.concat(sec);

//using spread opertor
const combined = [...first, ...sec];

// add element
//middle
const comb1ined = [...first, "a", ...sec];
//in last
const comb1ined = [...first, "a", ...sec, "b"];
//in start
const comb1ined = ["a", ...first, "a", ...sec, "b"];
