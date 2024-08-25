// DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR

//!object1 Quyidagi massivdagi barcha odamlarni yoshlarining o’rtacha qiymatini chiqaruvchi getAverageAge(arr) nomli funksiya yozing.

// Input: const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];
// Output: 27.25
// const obj = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
//   { name: "Sardor", age: 20 },
// ];
// let count = 0;
// let sum = 0;
// for (let key in obj) {
//   sum += obj[key].age;
//   count++;
// }
// let res = sum / count;
// console.log(res);

//!object2 Massiv ichidagi har bir objectga isMarried nomli property qo’shilsin. Agar object yoshi 25 dan kichi bo’lsa isMarried ga false, aks holda true qiymat o’zlashtirilsin.

// 	Output: [
//   { name: "Abdulaziz", age: 33, isMarried: true},
//   { name: "Erkin", age: 22, isMarried: false },
//   { name: "Temur", age: 34, isMarried: true },
//   { name: "Sardor", age: 20, isMarried: false },
// ];

// const obj = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// for (let key in obj) {
//   console.log((obj[key].isMaried = obj[key].age >= 25 ? true : false));
// }

// console.log(obj);

//!object3 Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(arr) nomli funksiya yozing. (for)

// 	Output: ["Temur", "Sardor"]
// const obj = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// let min = obj[0];
// let max = obj[0];
// function getNameMaxMinAge(obj) {
//   for (let el of obj) {
//     if (el.age < min.age) {
//       min = el;
//     }
//     if (el.age > max.age) {
//       max = el;
//     }
//   }

//   return [min.name, max.name];
// }

// console.log(getNameMaxMinAge(obj));
//!object4 Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin.

// Input: {1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20}
// Output: {20: [1, 3, 8], 30: [2, 5], 40: [4, 7]: 50: [6]}
// let obj = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };

// let res = {};

// for (let key in obj) {
//   // console.log(key, obj[key]);
//   let el = obj[key];
//   if (el in res) {
//     res[el].push(key);
//   } else {
//     res[el] = [key];
//   }
// }

// console.log(res);

//!object5 Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.

// Input: obj1 = { a: 3, b: 10, c: 5, d: 7 };
// obj2 = { a: 10, d: 4, e: 6, f: 15 };
// Output: obj = {b: 10, c: 5, e: 6, f: 15};
// let obj1 = { a: 3, b: 10, c: 5, d: 7 };
// let obj2 = { a: 10, d: 4, e: 6, f: 15 };

// let res = {};

// for (let key in obj1) {
//   if (!(key in obj2)) {
//     res[key] = obj1[key];
//   }
// }

// for (let key in obj2) {
//   if (!(key in obj1)) {
//     res[key] = obj2[key];
//   }
// }
// console.log(res);

//? UYGA VAZIFA

// !1 Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)

// Input:
// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };
// Output:
// firstName: Abdulaziz
// lastName: Toshpulatov
// age: 23
// languages: js,python,c++,nodejs
// friends: Jamshid+Abbos+Jalol+Mar'uf
// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// for (let key in me) {
//   if (key === "friends") {
//     console.log(`${key}: ${me[key].join("+")}`);
//   } else {
//     console.log(`${key}: ${me[key]}`);
//   }
// }

// Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)

// Input: 5
// Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

// let num = 5;
// let obj = {};
// for (let i = 0; i <= num; i++) {
//   obj[i] = i * i;
// }

// console.log(obj);

// 2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping. (Object.keys(), Object.values())
// let obj = { 0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };
// let sumKey = 0;
// let sumValue = 0;

// for (let key in obj) {
//   sumKey += +key;
//   sumValue += obj[key];
// }

// console.log(sumValue);
// console.log(sumKey);

// Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)

// Input: ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"]
// Output: {"Abdulaziz": 9, "Safarmurod": 10, "O’rol": 5, "Jahongir": 8}

// let arr = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   obj[arr[i]] = arr[i].length;
// }

// console.log(obj);

// Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())

// Input: {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// Output: 50000

// let obj = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };
// let sum = Object.values(obj);
// let res = 0;
// for (let el in sum) {
//   res += sum[el];
// }

// console.log(res);

// Object kalitlarining barchasi string toifasidagi ma’lumotlardan tuzilgan bo’lsa true, aks holda false qiymat qaytaruvchi defineObject nomli funksiya hosil qiling. (Object.keys())

// Input: {abc: 1, 123: 2, d: 5}
// Output: false
// function defineObject(obj) {
//   let keys = Object.keys(obj);
//   for (let key of keys) {
//     if (!isNaN(key)) {
//       return false;
//     }
//   }
//   return true;
// }

// Example usage
// let obj = { abc: 1, 123: 2, d: 5 };
// let result = defineObject(obj);
// console.log(result); // Output: false

// Agar object qiymatlari ichida falsy qiymatlar bo’lsa, ularni o’chirib yangi object hosil qiling. (Object.keys())

// Input: { a: false, b: 12, c: true, d: 0 }
// Output: { b: 12, c: true }

// let res = {};

// let obj = { a: false, b: 12, c: true, d: 0 };

// for (let el in obj) {
//   if (obj[el]) {
//     res[el] = obj[el];
//   }
// }

// console.log(res);

// Bir necha takrorlanuvchi sonlar ishtirok etgan massivdan shunday obyekt hosil qilingki, bu object kalitlari massivning takrorlanmas sonlaridan, qiymatlari esa o’sha sonlarning massivda necha marta ishtirok etganidan tuzilgan bo’lsin. (for)

// Input: [ 7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9 ]
// Output: { 7: 3, 8: 2, 4: 3, 5: 3, 9: 1 }
// let obj = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// let newObj = {};

// for (let i = 0; i < obj.length; i++) {
//   let num = obj[i];
//   if (newObj[num]) {
//     newObj[num]++;
//   } else {
//     newObj[num] = 1;
//   }
// }

// console.log(newObj);

// Uzun sondan shunday obyekt hosil qilingki, bunda object kalitlari sinflardan, qiymatlari esa o’sha sonning mos ravishdagi o’sha sinfdagi qiymatlaridan tuzilgan bo’lsin. (for, slice)

// Input: 8945472985629;
// Output: { birlar: 629, minglar: 985, millionlar: 472, milliardlar: 945, trilionlar: 8 }

let num = 8945472985629;
// let obj = {};
// Sonni stringga aylantiramiz, chunki biz raqamlarni bo'laklarga ajratishimiz kerak
let numStr = num.toString();
let classes = ["birlar", "minglar", "millionlar", "milliardlar", "trilionlar"];
let i = 0;
while (numStr.length > 0) {
  // Oxiridan 3 ta raqamni kesib olamiz
  let chunk = numStr.slice(-3);
  // Obyektga mos sinf nomini va raqamlarni kiritamiz
  obj[classes[i]] = chunk;
  // Kesilgan raqamlarni stringdan olib tashlaymiz
  numStr = numStr.slice(0, -3);
  // Keyingi sinfga o'tish
  i++;
}

console.log(obj);

// Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.

// Input:
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ]
// Output:
// 1. Akrom Malikning "Halqa" kitobi o'qilmagan;
// 2. O'tkir Hoshimovning "Dunyo ishlari" kitobi o'qilgan;
// 3. Abdulfattoh Abu G'uddaning "Vaqtning qadri" kitobi o'qilmagan;

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// for (let el in books) {
//   if (books[el].alreadyRead) {
//     console.log(
//       `${books[el].author}ning "${books[el].title}" kitobi o'qilgan.`
//     );
//   } else {
//     console.log(
//       `${books[el].author}ning "${books[el].title}" kitobi o'qilmagan.`
//     );
//   }
// }
// Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.

// Input: const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let sum = 0;

// for (let product of products) {
//   let price = product.price;
//   let discount = product.discount;
//   let quantity = product.quantity;

//   sum += (price - (price * discount) / 100) * quantity;
// }

// console.log(sum);

// Objectning kalitlaridan va qiymatlaridan iborat bo'lgan massiv tuzing.

// Input: const obj = {
//   "it": 20,
//   "mushuk": 10,
//   "sigir": 200,
//   "tovuq": 2
// }
// Output: ["it", 20, "mushuk", 10, "sigir", 200, "tovuq", 2]
// const obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };
// let arr = [];
// for (let el in obj) {
//   arr.push(obj[el]);
//   arr.push(el);
// }

// console.log(arr);

// GPA ni hisoblovchi dastur tuzing.

// GPA = (grade1 * kredit1 + grade2 * kredit2 + ...) / (kredit1 + kredit2 + ...)

// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// let sum = 0;

// let sumKridit = 0;
// for (let grade of grades) {
//   sumKridit += grade.kredit;
//   sum += grade.grade * grade.kredit;
// }
// console.log(sum / sumKridit);

// Abdulaziz Programmer nechta to'g'ri va noto'g'ri javob topganligini toping.

// const rightAnswers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };
// const myAnswers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };

// let count = 0;
// const questionKeys = Object.keys(rightAnswers);

// for (const key of questionKeys) {
//   if (myAnswers[key] === rightAnswers[key]) {
//     count++;
//   }
// }

// console.log(count);

//  Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.

// Input:  let n = 3
// const obj = { a: 2, b: 3, c: 4, d: 6 };
// Output:  const res = { a: 6, b: 9, c: 12, d: 18 }
// function getMultipleValues(n) {
//   let res = {};

//   for (let el in obj) {
//     res[el] = obj[el] * n;
//   }

//   return res;
// }

// let n = 3;
// const obj = { a: 2, b: 3, c: 4, d: 6 };
// const res = { a: 6, b: 9, c: 12, d: 18 };

// console.log(getMultipleValues(n));

// Quyidagi obyektdan destructing orqali barcha qiymatlarini oling.

// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };

// const {
//   name,
//   company: {
//     name: nameComp = name, // nameComp default qiymati sifatida name ishlatiladi, lekin bu holatda kerak emas
//     price,
//     founder: { firstName, lastName, birthDate },
//   },
// } = product;

// console.log(name, price, firstName, lastName, birthDate);

// Quyidagi massivdagi barcha o'quvchilarni protcentlarining o'rtacha qiymatini toping, shuningdek, objectlarga quyidagi propertylarni qo'shib yangi massiv qaytaring.

// const students = [
//   { name: "Ali", percentage: 85 },
//   { name: "O'zbek", percentage: 90 },
//   { name: "Maks", percentage: 78 },
//   { name: "Nazar", percentage: 88 },
// ];

// // 1. O'rtacha protsentni hisoblash
// let totalPercentage = 0;
// for (let i = 0; i < students.length; i++) {
//   totalPercentage += students[i].percentage;
// }
// const averagePercentage = totalPercentage / students.length;

// // 2. Har bir o'quvchiga qo'shimcha propertylarni qo'shish
// const updatedStudents = [];
// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   updatedStudents.push({
//     name: student.name,
//     percentage: student.percentage,
//     averagePercentage: averagePercentage,
//     passed: student.percentage >= 60 ? 'Yes' : 'No',
//   });
// }

// console.log("O'rtacha protsent:", averagePercentage);
// console.log("Yangi massiv:", updatedStudents);

// grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.
// const students = [
//   { name: "Ali", protcent: 85 },
//   { name: "O'zbek", protcent: 90 },
//   { name: "Maks", protcent: 78 },
//   { name: "Nazar", protcent: 88 },
// ];

// let updatedStudents = [];
// let ball;
// for (let el of students) {
//   if (el.protcent >= 90 && el.protcent < 100) {
//     ball = 5;
//   } else if (el.protcent > 80 && el.protcent < 90) {
//     ball = 4;
//   } else if (el.protcent > 70 && el.protcent < 80) {
//     ball = 3;
//   } else {
//     ball = 2;
//   }
//   updatedStudents.push({
//     name: el.name,
//     protcent: el.protcent,
//     ball: ball,
//   });
// }

// console.log(updatedStudents);

// isPassed propertyga protcent 70 dan o'tsa va teng bo’lsa true, aks holda false qiymat o'zlashtirilsin.
// const students = [
//   { name: "Ali", protcent: 85, ball: 4 },
//   { name: "O'zbek", protcent: 90, ball: 5 },
//   { name: "Maks", protcent: 60, ball: 3 },
//   { name: "Nazar", protcent: 88, ball: 4 },
// ];
// let updatedStudents = [];
// for (let el of students) {
//   // el.isPassed = el.protcent >= 70;

//   updatedStudents.push({
//     name: el.name,
//     protcent: el.protcent,
//     ball: el.ball,
//     isPassed: (el.isPassed = el.protcent >= 70),
//   });
// }

// console.log(updatedStudents);

// Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang.

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
// const pupils = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
//   { name: "Bobur", protcent: 66 },
//   { name: "Kamron", protcent: 75 },
// ];

// let passedCount = 0;
// let failedCount = 0;

// const updatedPupils = [];

// for (let pupil of pupils) {
//   let ball;

//   // Baho hisoblash
//   if (pupil.protcent >= 90 && pupil.protcent < 100) {
//     ball = 5;
//   } else if (pupil.protcent > 80 && pupil.protcent < 90) {
//     ball = 4;
//   } else if (pupil.protcent > 70 && pupil.protcent < 80) {
//     ball = 3;
//   } else {
//     ball = 2;
//   }

//   // O'tgan va o'tmaganlarni hisoblash
//   if (pupil.protcent >= 70) {
//     passedCount++;
//   } else {
//     failedCount++;
//   }

//   // Yangi ob'ekti yaratish va updatedPupils massiviga qo'shish
//   updatedPupils.push({
//     name: pupil.name,
//     protcent: pupil.protcent,
//     ball: ball,
//     passed: pupil.protcent >= 70 ? 'Yes' : 'No'
//   });
// }

// console.log("O'tganlar soni:", passedCount);
// console.log("O'tmaganlar soni:", failedCount);
// console.log("Yangi massiv:", updatedPupils);
