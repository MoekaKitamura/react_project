function print(callback) {
  const result = callback(4);
  console.log(result)
}



function fn(number = 3) {
  return number * 2;
}

debugger
// console.log(fn(4))
print(fn)
