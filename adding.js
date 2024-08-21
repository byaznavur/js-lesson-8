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
  fullName: function () {
    return "Abdulaziz Programmer";
  },
  university: {
    name: "TUIT",
    course: 5,
    GPA: 4.8,
  },
  2019: "Enter the university",
  2011: "Republic champion",
  null: "NULL",
};

person.height = 185;
person.weight = 75;

person.subjects = ["Math", "History", "Physics"];

person.work = {
  name: "Najot Ta'lim",
  location: "Qatortol",
};

person["undefined"] = "Hello";

console.log(person);
