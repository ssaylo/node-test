const path = process.argv[2];

const fs = require("fs");

const s = fs.readFileSync(path).toString();

let num = s.split("\n").length;

console.log(num - 1);
