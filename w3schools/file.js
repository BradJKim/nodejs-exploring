const fs = require("fs");

if (!fs.existsSync("test.txt")) {
    fs.createWriteStream("test.txt");
}

const content = "this is content!";

try {
    fs.writeFileSync("test.txt", content);
} catch (err) {
    console.log(err);
}

console.log("done writing");

console.log("printing file content:");

try {
    const data = fs.readFileSync("test.txt", "utf8");
    console.log(data);
} catch (err) {
    console.error(err);
}
