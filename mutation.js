// let a = "Abdulaziz";

// a.length = 100;
// a["1"] = "B";

// console.log(a);
// console.log(a.length);

// let arr = [1, 5, 2, 8];

// arr[2] = 10;
// arr.length = 10;

// console.log(arr);

let arr = [4, 6, 3];

arr.push(5); // mutable;

let newArr = arr.slice(1, 3); // immutable

console.log(arr);
console.log(newArr);
