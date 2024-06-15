const fs = require("fs");

const readStream = fs.createReadStream("read.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./blog.txt");

/* readStream.on("data", (chunk) => {
    console.log("---new chunk---");
    console.log(chunk); // chunk.toString() instead of utf8
    writeStream.write("there was a chunk\n");
}); */

// piping
readStream.pipe(writeStream); // duplex stream exists too