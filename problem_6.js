// Task: Leap Year Checker

// Write A Function That Determines Whether A Given Year Is A Leap Year.

const leapYearChecker = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "It is a leap Year";
  } else {
    return "It is not a leap year";
  }
};

const result = leapYearChecker(1994);
console.log(result);
