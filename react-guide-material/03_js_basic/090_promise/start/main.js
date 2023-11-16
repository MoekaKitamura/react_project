let a = 0
console.log(a)

new Promise((resolve) => {
  setTimeout(() =>{
    a = 10
    // console.log(a)
    resolve(a)
    // reject(a)
  }, 4000);
}).then((b) => {
  console.log(b)
}).catch(() => {
  console.log("catch")
})


// setTimeout(() =>{
//   a = 1
//   console.log(a)
// }, 2000)

console.log(a)
