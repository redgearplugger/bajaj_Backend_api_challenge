const express = require("express");

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{res.send("hi")});

app.post("/bfhl", (req, res) => {
  let alpha=[];
  let odd=[];
  let even=[];
  let arr=req.body.data;
  for(let ele of arr){
    if(isNaN(ele)){
      alpha.push(ele.toUpperCase());
    }else if(parseInt(ele)%2==0){
      even.push(ele);
    }else{
      odd.push(ele);
    }
  }
  res.send({
    "is_success":true,
    "user_id":"dhairya_taneja_12102002",
    "email":"dhairya0192.be20@chitkara.edu.in",
    "roll_number":2010990192,
    "odd_numbers":odd,
    "even_numbers":even,
    "alphabets":alpha
    });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
