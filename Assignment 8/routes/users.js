const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const userSchema = require('../models/User');
const user = require('../models/User');

//getting all users
router.get('/getAll', async (req, res) => {
    try {
        console.log('Inside user/getAll API..');
        const users = await userSchema.find();
        res.json(users);
    } catch(err) {
        res.status(500).json({ message : err.message});
    }
});

router.get('/get/:id', getUser, (req, res) => {
    console.log('Inside user/get method')
    res.json(res.user)
});

//creating new user
router.post('/create', async (req, res) => {
    try {
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(req.body.password, salt);
                console.log(salt);
                console.log(hashedPassword);
        
                const user = new userSchema({ 
                                name: req.body.name, 
                                email: req.body.email, 
                                password: hashedPassword 
                });
                const newUser = await user.save();
                
                res.status(201).json(user)
            }
            catch(err) {
                res.status(500).json({ message: err.message});
            }
});

//updating user
router.put('/edit/:email', getUser, async (req, res) => {
    if(req.body.name != null){
        res.user.name = req.body.name;
    }
    if(req.body.password != null){
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        res.user.password = hashedPassword;
    }
    try{
        const updatedUser = await res.user.save();
        res.status(201).json(updatedUser);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }

});

//delete user
router.delete('/delete/:email', getUser, async (req, res) => {
    try{
        await res.user.remove();
        res.json({message: 'User '+res.user.name+ ' deleted successfully'})
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

async function getUser(req, res, next) {
    let user;
    try{
        user = await userSchema.findOne({email: req.params.email});
        if(user == null){
            return res.status(404).json({ message: 'Cannot find the user'});
        }
    }
    catch(err) {
        return res.status(500).json({message: err.message})
        
    }

    res.user = user;
    next()
}

// async function getUserEmail(req, res, next) {
//     let user;
//     try{
//         user = await userSchema.find()
//     }
// }

module.exports = router;