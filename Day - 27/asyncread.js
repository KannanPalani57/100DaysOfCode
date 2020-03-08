var fs = require("fs");

var data = fs.readFile("text.txt", function(err, data) {
  if (err) {
    console.log(err);
  }
  setTimeout(() => {
    console.log(data.toString());
  }, 4000);
});
console.log("It will print after the 4 seconds");
