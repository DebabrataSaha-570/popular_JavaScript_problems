// Task: Function Composition

// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const squareNumber = (num) => {
  return num * num;
};

const doubleNumber = (num) => {
  return num * 2;
};

const addFive = (num) => {
  return num + 5;
};

const squareDoubleAddFive = (num) => {
  const squaredValue = squareNumber(num);
  const dobuledValue = doubleNumber(squaredValue);
  const result = addFive(dobuledValue);
  return result;
};

const result = squareDoubleAddFive(2);
console.log(result);
