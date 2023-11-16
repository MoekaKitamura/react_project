export const hello = () => {
  console.log("hello!");
};

const funcB = () => {
  console.log("funcB output");
};

// 一つのファイルでひとつだけ
export default funcB;

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}

// exportをつけると外部からアクセス可能になる
export { User }
