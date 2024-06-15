const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.methods);

    // set header content type
    res.setHeader("Content-Type", "text/html");
    res.write('<head><link rel="stylesheet" href="#" /></head>');
    res.write("<p>hello, people</p>");
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log("listening for requests on port 3000");
}); // local by default