const express=require('express')
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.urlencoded({extended:true}));


app.use(bodyParser.json())
const port=7000

app.get("/",function(req,res){
    res.send("success")
})
app.post("/login",function(req,res){
    const email = req.body
    console.log("login is successful")
})
app.listen(port,()=>console.log(`app listening on port ${port}`))