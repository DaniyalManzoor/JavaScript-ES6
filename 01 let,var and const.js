//const =>  Block Scope     -> 1st prefer
//let => Block Scope        -> 2nd- prefer
//var =>  Function Scope    -> 3nd it really need.

const a = 1;
// a=3 generate error

function varScope() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

function letScope() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

letScope();
varScope();
