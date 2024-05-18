// Task: Sorting Objects

// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2018,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2021,
  },
  {
    make: "Chevrolet",
    model: "Malibu",
    year: 2019,
  },
  {
    make: "BMW",
    model: "320i",
    year: 2017,
  },
  {
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2022,
  },
  {
    make: "Audi",
    model: "A4",
    year: 2016,
  },
];

const sortedCars = (cars) => {
  if (Array.isArray(cars)) {
    return cars.sort((a, b) => a.year - b.year);
  } else {
    return "Please provide correct data";
  }
};

const result = sortedCars(cars);
console.log(result);
