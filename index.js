const obj = {
  live: 9,
  jumps: () => {
    console.log(this);
  },
};
console.log(obj.jumps());
