const fs = require("fs");

// reading files
fs.readFile("./blog.txt", (err, data) => {
    try {
        console.log(data);
    } catch {
        console.log(err);
    }
});

// writing files
fs.writeFile("./blog2.txt", "hello, world", () => {
    console.log("file was written");
});

// directories
if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        else{
            console.log("folder created");
        }
    });
} else {
    console.log("folder already exists, deleting folder");
    fs.rmdir("./assets", (err) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("folder deleted")
        }
    })
}

// deleting files
if (fs.existsSync("./blog2.txt")){
    fs.unlink("./blog2.txt", (err) => {
        if (err){
            console.log(err)
        }
        else{
            console.log("filed deleted")
        }
    })
}