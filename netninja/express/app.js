const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// app.set("views", "myviews");

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
    //res.sendFile("./views/index.html", { root: __dirname });
    const blogs = [
        { title: "blog1", snippet: "aslnwrltnsagasfgass" },
        { title: "blog2", snippet: "asrymtryWOTNWDFGIJNSAGASDF" },
    ];
    res.render("index", { title: "home", blogs: blogs }); // using ejs view engine, also passes in title var to view
});

app.get("/about", (req, res) => {
    //res.sendFile("./views/about.html", { root: __dirname });
    res.render("about");
});

app.get("/blog", (req, res) => {
    res.sendFile("./views/blog.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
    res.redirect("./about");
});

// 404, doesn't match with above paths
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname });
});
