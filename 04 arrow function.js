//before arrow fucntion
const square1 = function (num) {
  return num * num;
};

//after arrow function
const square2 = (num) => num * num;

console.log(square2(2));

// arrow function is really use
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
  { id: 4, isActive: true },
  { id: 5, isActive: true },
];

const activeJobs = jobs.filter((job) => job.isActive);
