var mongoose = require('mongoose');
// define our sample model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Sample', {
    name:{type : String, required:true,maxlength:30, trim:true, default: ''},
    email: {type : String, default: ''},
    password: {type : String, default: ''},
    message : {type : String, default: ''}
});

