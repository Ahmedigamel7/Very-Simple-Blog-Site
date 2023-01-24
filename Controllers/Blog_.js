const { model } = require('mongoose');
const Blog = require('../models/blog');

const blog_index = (req,res)=> {
 Blog.find().sort({createdAt:-1}) // findin all blogs and sorting them descending
    .then((results)=>{
        res.render('../myViews/Blogs/index.ejs',{blogs:results});
    }).catch((err)=>console.log(err));
};

const blog_create_get = (req,res)=> {
 res.render('../myViews/Blogs/create');
};

const blog_create_post = (req,res)=> {
const blog =new Blog(req.body);
    blog.save()
    .then((result)=>res.redirect('/blogs')).catch((err)=>console.log(err));
};

const blog_details = (req,res)=> {
const id = req.params.id;
 Blog.findById(id)
    .then((result)=>{ res.render('../myViews/Blogs/details',{blog:result}); })
     .catch((err)=>res.render('../myViews/404.ejs'));
};

const blog_delete = (req,res)=> {
   const id =req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=> res.json({redirect:'/blogs'}))
    .catch((err)=>{
        console.log(err);
    });
};


module.exports= {
    blog_index , blog_create_get , blog_create_post, blog_details , blog_delete
};