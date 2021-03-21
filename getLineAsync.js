const path = process.argv[2];

const fs = require("fs");

fs.readFile(path, "utf8", (err, s) => {
  if (err) return false;
  let num = s.split("\n").length;
  console.log(num - 1);
});
