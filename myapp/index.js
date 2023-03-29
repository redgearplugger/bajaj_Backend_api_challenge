const express=require("express");
const challenge=require("./Apis/index");
const app=express();

const createAndStartServer=()=>{
    app.post('/bfhl',challenge);
    app.listen(3000,()=>{
        console.log("server is running");
    })
}

createAndStartServer();