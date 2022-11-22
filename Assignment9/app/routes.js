// app/routes.js
// grab the nerd model we just created
//const { check } = require("express-validator");
var joi = require("@hapi/joi");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var Sample = require('./models/sample');
const jwt = require('jsonwebtoken')
const userController = require("./controllers/userController");

module.exports = (app) => {
    app.post("/user/login", userController.loginUser);
    
  
//    module.exports = function(app) {
//        // server routes ===========================================================
//        // handle things like api calls
//        // authentication routes
//        // sample api route


//        //get all users
       app.get('/user/getAll', function(req, res) {
        Sample.find(function(err, samples) {
          //    if there is an error retrieving, send the error.
          //                    nothing after res.send(err) will execute
             if (err)
                 res.send(err);
             console.log('samples', samples);
             res.json(samples);

          console.log("welcome to port");
         });
     });


  // Login user 
 // app.post('/user/login', function(req, res) {
   // console.log(req.body);

   
//    const user = Sample.findOne({
//    email : req.body.email,
//    password : req.body.password,
//    })
//    if(user)
//    {
//     const token = jwt.sign({
//     email: user.email,
//     },'secret123')
//     return res.json({status: 'ok',user:token})

//    }
//    else{return res.json({status:'ok',user:false})}
//       if(err || email) {
//         return res.status(403).json({
//           error: "Email already exists"
//         })
//       }
//     })


    // create user 
     app.post('/user/create', function(req, res) {
        console.log(req.body);

        const {email} = req.body
        let name = req.body.name
        let pass = req.body.passowrd

       
        Sample.findOne({email}, (err, email) => {
          if(err || email) {
            return res.status(403).json({
              error: "Email already exists"
            })
          }

          //schema
          const myschema = 
          //new Schema ({
             joi.object({
            name: joi.string().min(5)
                .max(30).
               pattern(new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/))
                // pattern(new RegExp("^[a-zA-Z]+(\s[a-zA-Z]+)?$"))
                .required()
                .messages({
                    "string.pattern.base": "Invalid name!!Name should contain alphabets",
                    "string.empty": "Name cannot be an empty field",
                    "string.min": "For name minimum 5 characters required",
                    "string.max": "maximum 30 characters allowed"
                }) ,
                email: joi.string().
                pattern(new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')).
                required()
                .messages({
                    "string.pattern.base": "Invalid Email!!",
                    "string.empty": "Email cannot be an empty field"
                    
                }),
                password: joi.string().min(8)
            
                .pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'))
                .required()
                .messages({
                    "string.pattern.base": "Password should contain Atleast one digit, atleast one lowercase character, atleast one uppercase character, atleast one special character",
                    "string.min": "For password minimum 8 characters required",
                    "string.empty": "Password cannot be an empty field"
                    
                })

        })

   // })
      
        const{error, value} = myschema.validate(req.body)
        
                

        if (error) {
            res.json({
                success: 0,
                message: error.details[0].message
            })
        }

      
     
        //Save in database
        else{
// hash the password using our new salt
            
            bcrypt.hash(req.body.password.trim(),saltRounds) 
            .then(hashPassword => {
                const newUser = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hashPassword
                };

                      
        //var rec = new Sample(req.body);
        var rec = new Sample(newUser);
        rec.save(function(err,n){
            if (err)
                console.log('saving failed'+" "+err);
            else{
                console.log('saved '+ n);
         
                res.send(n)
            }
            
        });



            });
               

  
    }

        });
    });
};
//      // update user
//      app.put('/user/edit/:email', function(req,res) {

//         const myschema = 
//         //new Schema ({
//            joi.object({
//           name: joi.string().min(5)
//               .max(30).
//              pattern(new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/))
//               // pattern(new RegExp("^[a-zA-Z]+(\s[a-zA-Z]+)?$"))
//               .required()
//               .messages({
//                   "string.pattern.base": "Invalid name!!Name should contain alphabets",
//                   "string.empty": "Name cannot be an empty field",
//                   "string.min": "For name minimum 5 characters required",
//                   "string.max": "maximum 30 characters allowed"
//               }) ,
              
//               password: joi.string().min(8)
          
//               .pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'))
//               .required()
//               .messages({
//                   "string.pattern.base": "Password should contain Atleast one digit, atleast one lowercase character, atleast one uppercase character, atleast one special character",
//                   "string.min": "Password minimum 8 characters required",
//                   "string.empty": "Password cannot be an empty field"
                  
//               })

//       })

//  // })
    
//       const{error, value} = myschema.validate(req.body)
      
              

//       if (error) {
//           res.json({
//               success: 0,
//               message: error.details[0].message
//           })
//       }


// else{
//     bcrypt.hash(req.body.password.trim(),saltRounds) 
//     .then(hashPassword => {      
//           let  uppassword = hashPassword
    
//         let updateemail = req.params.email;
//         let upname = req.body.name;
//         //let uppassword = req.body.password;
//         Sample.findOneAndUpdate({email: updateemail},{$set:{name:upname,password:uppassword}},{new:true},(err,data)=>{
//            if(err)
//            {res.send("Error")}
//            else{
//                      if(data == null){
//             res.send("User not found")
//            }else{
//             res.send(data)
//            }
//         }

//         })
// })
// }
//      });

//      //delete user
//      app.delete('/user/delete/:email',function(req,res)
//      {
//         let delemail = req.params.email;
//         Sample.findOneAndDelete(({email:delemail}), function(err,data){
//             if(err)
//             {res.send("ERROR")}
//             else{
//                 if(data == null)
//                 {res.send("No data")}
//                 else{
//                     res.send("User Delete"+data);
//                 }
//             }
//         })
//      })

      
       // route to handle creating goes here (app.post)
       // route to handle delete goes here (app.delete)
       // frontend routes =========================================================
       // route to handle all angular requests
      
   