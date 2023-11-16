const arry = [10, 20, 30, 40];
const newArry = [];

for(let i = 0; i < arry.length; i++) {
  const val = arry[i] * 2;
  if (val > 50) {
    newArry.push(arry[i] * 2)
  }
}

console.log(newArry)

const newArry2 = arry.map(val => val * 2).filter(val => val > 50)
const newArry3 = newArry2.filter(val => val > 50)

console.log(newArry2)
console.log(newArry3)

const mapped = [1, 2, 3].map(e => e * 2).filter(e => e > 2)

console.log(mapped)

newArry3.forEach(element => console.log(element));
