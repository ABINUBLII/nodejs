const colors = require("colors");
const validator = require("validator");
const _ = require("lodash");
const moment = require("moment");

console.log(`hai`.green); // syntax colors
const checkEmail = validator.isEmail("nubliabi97@rocket.com"); //validator.isEmail are syntax to check
console.log(checkEmail);

//kenapa pake validator ? karna fungsi validator untuk memudahkan syntax. sebenernya sama seperti :
if (checkEmail) {
  console.log("format email benar (@)");
} else {
  console.log("format email salah.");
}

console.log(_.capitalize("ABI NUbLLi FaRRanDDi".green)); // syntax _ dari variable (_.capitalize)

// syntax moment
moment.locale("id"); // syntax bahasa

const waktu = moment().format();
console.log(waktu);
console.log(moment().format("dddd, DD MMMM YYYY, h:mm:ss a")); // selasa, 30 januari 2024 dan jam.
console.log(moment().format("dddd")); // selasa.
