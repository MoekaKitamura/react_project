import functionB, { hello, User } from "./module.js";
// デフォルトexportは関数名を変えれる

hello();
const user = new User("moeka")
user.hello();
functionB();
