const express=require('express');
const app=express();
const path=require('path')
const port= process.env.PORT || 3000;
//public static path
const static_path=path.join(__dirname,"../public")

// serving frontend
app.use(express.static(static_path))
// used for dynamic view using handle bars
app.set('view engine', 'hbs');


//routing
app.get('/',(req,res)=>{
  res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/weather',(req,res)=>{
   res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('404_error')
})


app.listen(port,()=>{
    console.log(`Server is listening to ${port}......`)
})