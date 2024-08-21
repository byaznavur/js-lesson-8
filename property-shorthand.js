let firstName = "Abdulaziz";
let lastName = "Toshpulatov";

// let person = {
//   firstName: firstName,
//   lastName: lastName,
// };

let person = {
  firstName,
  lastName,
};

// console.log(person);

// function createMachine(name, isWork) {
//   return {
//     name: name,
//     isWork: isWork,
//   };
// }

function createMachine(name, isWork) {
  return {
    name,
    isWork,
  };
}

let res = createMachine("Washing car", false);

console.log(res);
