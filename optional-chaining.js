let person = {
  firstName: "Abdulaziz",
  lastName: "Programmer",
  age: 24,
  isDiplom: null,
  isMarried: false,
  test: undefined,
  languages: ["C++", "PHP", "JS", "PYTHON"],
  symbol: Symbol(),
  bigint: 498347984793824738924n,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  university: {
    name: "TUIT",
    course: 5,
    GPA: 4.8,
  },
  2019: "Enter the university",
  2011: "Republic champion",
  null: "NULL",
  greet() {
    console.log("Hello, World!");
  },
  greetFullName(start, end) {
    return `${start} ${this.firstName} ${this.lastName} ${end}`;
  },
  // work: {
  //   name: "Najot Ta'lim",
  //   location: "Qatortol",
  // },
  // work: undefined,
  // work: null,
  // work: false,
  // work: 0,
};

// console.log(person.university);
// console.log(person.university.name);
// console.log(person.name);

// console.log(person.work);
// console.log(person.work.name);

console.log(person.work && person.work.name);
console.log(person.work?.name);

// console.log(false.name);
