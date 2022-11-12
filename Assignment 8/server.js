const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json())

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user_auth_info');

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connection successful'));

app.listen(3000, () => console.log('Server started...'));

const userRouter = require('./routes/users.js');
app.use('/user', userRouter);

// app.get('/user/getAll', (req, res) => {
//     res.json(users);
// })

// app.post('/user/create', async (req, res) => {

//     try {
//         const salt = await bcrypt.genSalt();
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);
//         console.log(salt);
//         console.log(hashedPassword);

//         const user = { email: req.body.email, password: hashedPassword };
//         users.push(user);
//         res.status(201).send();
//     }
//     catch {
//         req.status(500).send();
//     }

// })

// app.post('/user/login', async (req, res) => {
//     const user = users.find(user => user.email===req.body.email);
//     if(user == null){
//         res.status(400).send('User not found');
//     }
//     try {
//         if( await bcrypt.compare(req.body.password, user.password)){
//             res.send('Success');
//         } else {
//             res.send('Not allowed');
//         }

//     } catch {
//         res.status(500).send();
//     }
// })