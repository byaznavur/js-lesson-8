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
    // console.log("This", this);
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
  // getBirthYear: () => {
  //   console.log("This", this);
  // },
  // getBirthYear: function () {
  //   console.log("This", this);
  // },
};

// person.firstName = "Abdilazizbek";

// person.lastName = "Toshpulatov";

// console.log(person.fullName());

// console.log(person.greetFullName("Hello", "!"));

// person.getBirthYear();
