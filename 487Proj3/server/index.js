
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

var db = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : 'your_password',
    database : 'maintenance_request_db'
});

app.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    db.query("SELECT user_id, type FROM users WHERE username = ? AND password = ?", 
    [username, password],(err, result) =>{
        if(err){
            res.status(500).send("Username or Password incorrect")
        } else if(result.length < 1) {
            res.status(500).send("Username or Password incorrect")
        } else {
            res.send({user_id: result[0].user_id, type: result[0].type});            
        }
    })
})

app.post('/tenant', (req, res) =>{
    const userId = req.body.userId;
    const location = req.body.location;
    const description = req.body.description;
    const photo = req.body.photo;

    db.query("INSERT INTO requests (tenant_id, location, description, photo, status, apartment) VALUES (?,?,?,?,'Pending', (SELECT apartment FROM tenants WHERE user_id = ?))",
    [userId, location, description, photo, userId], (err, result) => {
        if(err){
            res.status(500).send("Error inserting into server")
        }
    })
})

app.post('/admin/add-tenant', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const apartment = req.body.apartment;
    const phone = req.body.phone;
    const email = req.body.email;

    db.query("INSERT INTO users (username, password, type) VALUES (?,?,'tenant')",
    [username, password], (err, result) => {
        if(err){
            res.status(500).send("Error inserting into server")
        }
    })

    db.query("INSERT INTO tenants (user_id, name, phone, email, apartment) VALUES ( (SELECT user_id FROM users WHERE username = ? AND password = ?), ?, ?, ?, ? )",
    [username, password, name, phone, email, apartment], (err, result) => {
        if(err){
            res.status(500).send("Error inserting into server")
        }
    })

})

app.post('/admin/edit-tenant', (req, res) => {
    const userId = req.body.selectUserId;
    const apartment = req.body.apartment;

    db.query("UPDATE tenants SET apartment = ? WHERE user_id = ?",
    [apartment, userId] , (err, result) => {
        if(err){
            res.status(500).send("Error accessing server")
        }
        else if(result.length < 1){
            res.status(500).send("User "+userId+ " not found")
        }

    })
})

app.post('/admin/del-tenant', (req, res) => {
    const userId = req.body.selectUserId;

    db.query("UPDATE tenants SET check_out = CURRENT_TIMESTAMP WHERE user_id = ?",
    [userId], (err, result) => {
        if(err){
            res.status(500).send("Error accessing server")
        }
    })

    db.query("UPDATE users SET username = NULL, password = NULL, type = NULL WHERE user_id = ? AND type = 'tenant'",
    [userId], (err, result) => {
        if(err){
            res.status(500).send("Error accessing server")
        }
    })
    
})

app.post('/admin/add-staff', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;

    db.query("INSERT INTO users (username, password, type) VALUES (?,?,'staff')",
    [username, password], (err, result) => {
        if(err){
            res.status(500).send("Error inserting into server")
        }
    })

    db.query("INSERT INTO staff (user_id, name, phone, email) VALUES ( (SELECT user_id FROM users WHERE username = ? AND password = ?), ?, ?, ? )",
    [username, password, name, phone, email], (err, result) => {
        if(err){
            res.status(500).send("Error inserting into server")
        }
    })
})

app.post('/admin/del-staff', (req, res) => {
    const userId = req.body.selectUserId;

    db.query("UPDATE users SET username = NULL, password = NULL, type = NULL WHERE user_id = ? AND type = 'staff'",
    [userId], (err, result) => {
        if(err){
            res.status(500).send("Error accessing server")
        }
    })
})

app.get('/staff', (req, res) =>{
    db.query('SELECT * FROM requests', (err, result) => {
        if(err){
            res.status(500).send("Error accessing server")
        }
        else {
            res.send(result)
        }
    })
})

app.post('/staff-complete-request', (req, res) => {
    const userId = req.body.userId
    const requestId = req.body.requestId

    db.query("UPDATE requests SET status = 'Completed', staff_id = ? WHERE request_id = ?",
    [userId, requestId], (err, result) => {
        if(err){
            res.status(500).send("Error accessing server")
        }
        else {
            res.send(updated= true)
        }
    })
})

app.post('/staff', (req, res) =>{
    var status = req.body.status;
    var apartment = req.body.apartment;
    var location = req.body.location;
    var dateStart = req.body.dateStart;
    var dateEnd = req.body.dateEnd;

    if(dateStart == ''){
        dateStart = '1000-01-01T00:00'
    }
    if(dateEnd == ''){
        dateEnd = '9999-12-31T23:59'
    }

    //console.log({status})
    //console.log({apartment})
    //console.log({location})
    //console.log({dateStart})
    //console.log({dateEnd})

    const q = "SELECT * FROM requests WHERE"
              +"((status = ?) OR ('All' = ?)) AND ((apartment = ?) OR ('' = ?)) "
              +"AND ( (location = ?) OR ('' = ?) ) AND (created >= ?) AND (created <= ?)"

    db.query(q,[status, status, apartment, apartment, location, location, dateStart, dateEnd], 
        (err, result) => {
        if(err){
            res.status(500).send("Error accessing server")
        } else {
            res.send(result)
        }
    })
})

app.listen(8080, () =>{
    console.log('server listening on port 8080');
})