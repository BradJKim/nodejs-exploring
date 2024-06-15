const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 20);
    console.log(num)

    const greet = _.once(() => {
        console.log("hello")
    });

    greet();
    greet();

    // set header content type
    res.setHeader("content-Type", "text/html");

    let path = "./views";
    switch (req.url) {
        case "/":
            path += "/index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "/about.html";
            res.statusCode = 200;
            break;
        case "/about-me": // redirect page example
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            break;
        case "/blog":
            path += "/blog.html";
            res.statusCode = 200;
            break;
        default:
            path += "/404.html";
            res.statusCode = 404;
            break;
    }

    // send html file
    try {
        const file = fs.readFileSync(path);
        //res.write(file);
        res.end(file);
    } catch (err) {
        console.log(err);
    }
});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000");
}); // local by default
