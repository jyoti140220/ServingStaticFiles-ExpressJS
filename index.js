const express=require('express')

var app=express()


app.use(express.static(__dirname+'/public'))
app.use(express.static(__dirname+'/images'))


app.get('/as',(req,res)=>{
    res.send("Get Is Called...")
})

app.listen(3000,()=>{
    console.log("Server Running....");
})

