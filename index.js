// contoh 1 file yg di export
const hitung = require("./hitung");
const { kurang, string } = require("./kurangDanString"); // contoh 2 file yg di export

console.log(hitung(2, 2));
console.log(kurang());
console.log(string());
