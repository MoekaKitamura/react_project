const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(...nums, 20);
console.log(result);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1];
arr1.push(4)
let newArr1 = arr1;

console.log(arr1);
console.log(newArr);
console.log(newArr1);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };

console.log(newObj);

const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

const aaa = [1, 3, 4]
const restAA = (argA) => console.log(argA);
restAA(aaa)

const restB = (n, ...argB) => console.log(n, argB);
restB(1, 3, 4)
