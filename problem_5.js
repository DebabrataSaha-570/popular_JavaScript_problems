// Task: Find And Modify
// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const persons = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Emma",
    age: 24,
  },
  {
    name: "Alexander",
    age: 25,
  },
  {
    name: "Michael",
    age: 26,
  },
  {
    name: "David",
    age: 27,
  },
  {
    name: "Sophia",
    age: 28,
  },
  {
    name: "Henry",
    age: 30,
  },
];

const modifyAge = (personsData, personName, personNewAge) => {
  if (
    Array.isArray(personsData) &&
    typeof personName === "string" &&
    typeof personNewAge === "number"
  ) {
    const isPersonAvailable = personsData.find(
      (person) => person.name === personName
    );
    if (isPersonAvailable) {
      const otherPersons = personsData.filter(
        (person) => person.name !== personName
      );
      const updatedPersonData = personsData.find(
        (person) => person.name === personName
      );
      updatedPersonData.age = personNewAge;
      otherPersons.push(updatedPersonData);
      return otherPersons;
    } else {
      return `${personName} is not available `;
    }
  } else {
    return "Please provide correct data";
  }
};

const result = modifyAge(persons, "David", 35);
console.log(result);
