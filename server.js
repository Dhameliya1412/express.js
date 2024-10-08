const express = require('express');
const morgan = require('morgan');
const app = express();   
const users = require("./friend.json");
// console.log(users);


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/", (req, res) => {
    res.send("Welcome to Express server");
})

// CRUD
// Create User

app.post('/user', (req, res) => {
    // console.log(req.body);
    res.push(req.body);
    res.json({message:'User Added Success'});
});

// Read - Get All Users
server.get('/user', (req, res) => {
    res.json(users);
})

// Get Single Users
app.get("/user/:id", (req, res) => {
    let id = +req.params.id;
    let item = users.find((user)=>user.id === id);
    res.json(item);
})


// Replace Data -  PUT
app.put("/user/:id", (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((item) => item.id === id);
    users.splice(userIndex, 1, req.body);
    res.json({message: "User Replaced Success"});
})

// Update Data -  PATCH
app.patch("/user/:id", (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((item) => item.id === id);
    let user = users[userIndex];
    users.splice(userIndex, 1, {...user,...req.body});
    res.json({message: "User Update Success"});
})

// Delete Data -  DELETE
app.delete("/user/:id", (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((item) => item.id === id);
    users.splice(userIndex, 1);
    res.json({message: "User Delete Success"});
})


server.listen(1212, () => {
    console.log('Server Start at http://localhost:1212');
});