// Task: Unique Values

// Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

const duplicateArrayNumbers = [1, 2, 3, 4, 3, 4, 2];

const removeDuplicateNumbers = (duplicateArray) => {
  const uniqueArray = [...new Set(duplicateArray)];
  return uniqueArray;
};

const result = removeDuplicateNumbers(duplicateArrayNumbers);
console.log(result);
