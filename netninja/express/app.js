const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// connect to mongodb with mongoose
// listen for requests after connecting
const dbURI = "";
mongoose
    .connect(dbURI)
    .then((result) => {
        console.log("Connected to db");
        app.listen(3000);
    })
    .catch((err) => console.log(err));

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// app.set("views", "myviews");

// middleware and static files
app.use((req, res, next) => {
    // insert middleware logic here
    console.log("first middleware");
    next();
});

app.use((req, res, next) => {
    // insert middleware logic here
    console.log("next middleware");
    next();
});

app.use(express.static("public"));
app.use(morgan("dev"));

// mongoose and mongo sandbox routes
app.get("/add-blog", async (req, res) => {
    const blog = new Blog({
        title: "new blog",
        snippet: "asdfasdfasdf",
    });

    try {
        const result = await blog.save();
        res.send(result);
    } catch (err) {
        console.log(err);
    }
});

app.get("/all-blogs", async (req, res) => {
    try {
        const result = await Blog.find();
        res.send(result);
    } catch (err) {
        console.log(err);
    }
});

app.get("/single-blog", async (req, res) => {
    try {
        const result = await Blog.findById("666e561ab23e8a133632f621");
        res.send(result);
    } catch (err) {
        console.log(err);
    }
});

// routing

app.get("/", async (req, res) => {
    //res.sendFile("./views/index.html", { root: __dirname });
    /* const blogs = [
        { title: "blog1", snippet: "aslnwrltnsagasfgass" },
        { title: "blog2", snippet: "asrymtryWOTNWDFGIJNSAGASDF" },
    ]; */
    const blogs = await Blog.find();
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
