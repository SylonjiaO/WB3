let date = new Date();
console.log(date.toString()); //toString
console.log (date.toDateString()); //toDateString
console.log (date.toLocaleString()); //toLocaleString
console.log (date.toUTCString()); //toUTCString

let milliSec = Date.parse("May 1, 2022");
let d = new Date(milliSec);

console.log(d.getTime()); //getTime