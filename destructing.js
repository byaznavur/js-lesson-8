// let arr = [10, 4, 7, 15];

// const [el1, el2, el3, el4] = arr;

// console.log(el1, el2, el3, el4);

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
  work: {
    name: "Najot Ta'lim",
    location: "Qatortol",
  },
};

// const {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
//   isMarried: isMarried,
//   isDiplom: diplom,
//   2019: result2019,
//   languages: [el1, el2, el3, el4],
//   university: {
//     name: universityName,
//     course: universityCourse,
//     GPA: universityGPA,
//   },
// } = person;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(diplom);
// console.log(result2019);
// console.log(el1);
// console.log(el2);

// console.log(fullName());

// console.log(universityName);

const {
  firstName,
  lastName,
  age,
  isMarried,
  isDiplom,
  2019: result2019,
  languages: [el1, el2, el3, el4],
  university: { name: universityName, course, GPA },
  work: { name: workName, location },
} = person;

console.log(firstName);
console.log(lastName);
console.log(universityName);
console.log(course);

console.log(workName);
