var User = require("../models/sample");
const bcrypt = require("bcrypt");

exports.loginUser = async function (req, res) {
const { email, password } = req.body;
const userVal = await User.findOne({ email });
if (!userVal) {

return res.json({ error: "User Not found" });

}

if (await bcrypt.compare(password, userVal.password)) {
  
if (res.status(201)) {
 
return res.json({ status: 200, message: "login", exist: true});
} 
else {
 
return res.json({ status: 200, message: "user not found", exist: false });
}
 }
res.json({ status: 200, error: "Invalid Password", exist: false })

};