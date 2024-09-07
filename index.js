const express = require('express');

const app = express();
app.use(express.json());

const users = [];
const generateToken = () =>{
    
}
app.post("/signup", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password : password
    })

    res.json({
        message : "Signed in Successfully"
    })
})

app.post("/signin",(req,res)=>{

})

app.listen(3000);