const express = require('express');
const app = express();
const mongoose= require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./Routes/blogRoutes')


// uri to connect to mongodb
const dbUri = "mongodb+srv://AE7:W2ufqbdRTcu_t8S@cluster0.ayqr65e.mongodb.net/Blogs?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);
mongoose.connect(dbUri).then((res)=>{console.log("connected successfully");
app.listen(3000,'localhost'); 
}).catch((err)=>console.log(err)); 

//setting the view engine conf to ejs
app.set('view engine', 'ejs');
//setting myViews as views source 
app.set('views','myViews');

//middleware for static files
app.use(express.static('Public'));
// logger middleware 
app.use(morgan('dev'));
// takes url encoded data and parse it to an object
app.use(express.urlencoded());  

app.get('/',(req,res)=>{
   res.redirect('/blogs');
});

app.use('/blogs',blogRoutes);

// if no valid url specified this fucntion will fire up to return 404 page
app.use((req,res)=>{
    res.status(404).render('404');
});
