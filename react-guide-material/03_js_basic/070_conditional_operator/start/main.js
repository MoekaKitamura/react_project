// 三項演算子（ ? : ）

const a = undefined;
let resultA = a ? "true" : "false";

// if(a) {
//   resultA = "true";
// } else {
//   resultA = "false";
// }
console.log(resultA);

function getResult() {
  return a ? "true" : "false";
}

console.log(getResult());
