const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = [];

const register = async(req , res) =>{
    const {email , password} = req.body;

    const existingUser = users.find(user => user.email === email);
    if(existingUser){
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password , 10);
    const newUser = {email , password:hashedPassword};
    users.push(newUser);

    return res.status(200).json({message: 'New use successfully created'});
}


const login = async(req , res) =>{
    const {email , password} = req.body;

    const user = users.find(user => user.email === email);
    if(!user){
        return res.status(400).json({message: 'User not found'});
    }

    const isPasswordValid = await bcrypt.compare(password , user.password);
    if(!isPasswordValid){
        return res.status(400).json({message: 'Invaild credentials'});
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET,{ expiresIn: '1h' });

    return res.json({ token });
}


module.exports = {register , login};