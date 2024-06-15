//console.log(global);

/* global.setTimeout(() => {
    console.log("in timeout");
}, 3000); */

setTimeout(() => {
    console.log("in timeout");
    clearInterval(int);
    console.log("interval cleared");
}, 2000);

const int = setInterval(() => {
    console.log("in the interval");
}, 500);

console.log(__dirname);
console.log(__filename);