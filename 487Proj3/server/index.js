const express = require('express');
const app = express();
const mysql = require('mysql');

app.get('/', (req, res)=>{
    res.send('Test')
})

/*
app.post('/login', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    var userType;

    db.query("SELECT type FROM users WHERE username = ? AND password = ?", [username,password],(err, result) => {
        if(err) {
            console.log(err)
            userType = "error"
            res.send({userType})
        } else {
            userType = result;
            console.log(userType)
            res.send({userType})
        }
    })
}) */

app.listen(8080, () => {
    console.log('server listing on port 8080')
})