const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../prisma/prisma');

const register = async(req , res) =>{
    const {email , password} = req.body;

    const existingUser = await prisma.user.findUnique({where : { email } });
    if(existingUser){
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password , 10);
    const user = await prisma.user.create({
        data: {email, password: hashedPassword}
    });

    return res.status(200).json({message: 'New use successfully created'});
}


const login = async(req , res) =>{
    const {email , password} = req.body;

    const user = await prisma.user.findUnique({where : {email}});
    
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