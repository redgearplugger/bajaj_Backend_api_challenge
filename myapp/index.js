const express=require("express");
const challenge=require("./Apis/index");
const app=express();

app.use("/",challenge);

app.listen(3000,()=>{
    console.log("server is running");
})