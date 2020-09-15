// PURE Function

// same    same
// args => result

// -- no random values
// -- no current data/time
// -- no global state(DOM, files, db, etc)
// -- no mutation of parameters

function isEligible(age, minAge) {
  return age > minAge;
}

// BENIFITS
// -- self documenting
// -- easily testable
// -- concurrency
// -- cacheable
