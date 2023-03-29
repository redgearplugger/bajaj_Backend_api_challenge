const express=require("express");
const database =require("../database");

const challenge = express();

challenge.post("bfhl", async(request,response)=>{
 try{
    
     const  get=[...request.body.data];
     
        
        if(database.data.alphabets==" "){
            let length1=database.data.numbers.length;
            var j=0;
            var count=0;
    for(var i=0;i<length1;i++){
        if(get[j]==database.data.numbers[i]){
            count++;
        }
    }

    if(count==length1){
        return response.status(200).json(database.data);
    }
    else{
        return response.status(400).json("data not found");
    }
}
else if(database.data.alphabets!=" " && database.data.numbers!=" "){
    var j=0;
    var count=0;
    for(var i=0;i<length1;i++){
        if(get[j]==database.data.numbers[i]){
            count++;
        }
    }
    var j=0;
    for(var i=0;i<length2;i++){
        if(get[j]==database.data.alphabets[i]){
               count++;
        }
    }       

    if(count==(length1+length2)){
        return response.status(200).json(database.data);
    }
    else{
        return response.status(400).json("data not found");
    }
}

else{
    let length2=database.data.alphabets.length;
    var j=0;
    var count=0;
    for(var i=0;i<length2;i++){
        if(get[j]==database.data.alphabets[i]){
               count++;
        }
    }
    if(count==length2){
        return response.status(200).json(database.data);
    }
    else{
        return response.status(400).json("data not found");
    }
}

  

 }catch(error){
         return response.status(500).json({error:message.error})
 }

});

module.exports=challenge;