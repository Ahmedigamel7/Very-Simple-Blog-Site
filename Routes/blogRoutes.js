
const express = require('express');
const router = express.Router();
const controllers =require('../Controllers/Blog_') 


//blog routes
router.get('/', controllers.blog_index);

router.get('/create', controllers.blog_create_get );

router.post('/', controllers.blog_create_post);

router.get('/:id', controllers.blog_details); // colomn is important it will search what come after 

router.delete('/:id', controllers.blog_delete);

module.exports =router ;