// Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const persons = [
  {
    name: "John",
    age: 30,
    gender: "male",
  },
  {
    name: "Emma",
    age: 24,
    gender: "female",
  },
  {
    name: "Alexander",
    age: 25,
    gender: "male",
  },
  {
    name: "Michael",
    age: 26,
    gender: "male",
  },
  {
    name: "David",
    age: 27,
    gender: "male",
  },
  {
    name: "Sophia",
    age: 28,
    gender: "female",
  },
  {
    name: "Henry",
    age: 30,
    gender: "male",
  },
];

const filterFemales = (personsList) => {
  if (Array.isArray(personsList)) {
    const malesList = personsList.filter(
      (person) => person.gender !== "female"
    );
    return malesList;
  } else {
    return "Please give a array of object";
  }
};

const result = filterFemales(persons);
console.log(result);
