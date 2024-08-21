const people = [
  { name: "Abdulaziz", age: 23 },
  { name: "Erkin", age: 22 },
  { name: "Umrzoq", age: 40 },
  { name: "Temur", age: 24 },
  { name: "Sardor", age: 20 },
  { name: "Diyorbek", age: 30 },
];

// const getNameMaxMinAge = (obj) => {
//   let max = obj[0];
//   let min = obj[0];

//   for (let el of obj) {
//     if (el.age > max.age) {
//       max = el;
//     }
//     if (el.age < min.age) {
//       min = el;
//     }
//   }

//   return [max.name, min.name];
// };

// let res = getNameMaxMinAge(people);

// console.log(res);

// let sum = 0;

// let len = people.length;

// for (let el of people) {
//   sum += el.age;
// }

// console.log(sum / len);

// for (let el of people) {
// if (el.age >= 25) {
//   el.isMarried = true;
// } else {
//   el.isMarried = false;
// }
// el.isMarried = el.age >= 25;
// }

// console.log(people);

let obj = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };

let res = {};

for (let key in obj) {
  // console.log(key, obj[key]);
  let el = obj[key];
  if (el in res) {
    res[el].push(key);
  } else {
    res[el] = [key];
  }
}

console.log(res);
