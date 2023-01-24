const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating object of the Schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
},{timestamps:true});

// create model of the Schema above
const Blog = mongoose.model('Blog', blogSchema );

module.exports = Blog;
