const express = require("express");
const Blog = require("../models/blog");
const blogController = require("./controllers/blogController");

const router = express.Router();

// mongoose and mongo sandbox routes

// with controller
// router.get("/", blogController.blog_index);

router.get("/add-blog", async (req, res) => {
    // req.body
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

router.get("/all-blogs", async (req, res) => {
    try {
        const result = await Blog.find();
        res.send(result);
    } catch (err) {
        console.log(err);
    }
});

router.get("/single-blog", async (req, res) => {
    try {
        const result = await Blog.findById("666e561ab23e8a133632f621");
        res.send(result);
    } catch (err) {
        console.log(err);
    }
});

// routing

/* 
route parameter example 
app.get("/blogs/:id")
    req.params.id;
    await Blog.deleteById(id);

app.delete("/blogs/:id")
    req.params.id;
    await Blog.findByIdAndDelete(id);

    res.json({ redirect: "/blogs" })
*/

module.export = router;
