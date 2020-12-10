
const express=require('express');
const path=require('path');
const app=express();
const hbs=require('hbs');

const port=process.env.PORT||5434;
 





app.set('view engine','hbs');

app.set('views',path.join(__dirname,"../templates/views"));

hbs.registerPartials(path.join(__dirname,"../templates/partials"));
app.use(express.static(path.join(__dirname,'../public')))
//app.get('route','callback')

//routing
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})


app.get("/weather",(req,res)=>{
    res.render("weather");
})


app.get("*",(req,res)=>{
    res.render("weather");
})

app.listen(port,()=>{
    console.log("server is up on port"+5434);
})













