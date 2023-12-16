import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/User.js';

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create(name, email, hashedPassword);
        res.status(200).json({message: "User created successfully!"});
    }

    catch (err) {
        console.error(err);
        res.status(500).json({error: "Registration process failed!"});
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({error: "Login process failed!"});
        }

        const token = jwt.sign({userId: user.id}, "TASKAPPSECRETKEY3091321023801381038103801371093790137102370123012370123701237012730127301730912312903721033131243213", {expiresIn: "1h"});
        res.json({token, authUser: {name: user.name, email: user.email}});
    }

    catch (err) {
        console.error(err);
        res.status(401).json({error: "Login process failed!"});
    }
}