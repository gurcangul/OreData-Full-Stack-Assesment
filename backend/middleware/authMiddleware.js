import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({error: "Unauthorized"});
    }

    jwt.verify(token, "TASKAPPSECRETKEY3091321023801381038103801371093790137102370123012370123701237012730127301730912312903721033131243213", (err, decoded) => {
        if (err) {
            console.error(err);
            return res.status(401).json({error: "Invalid token"});
        }

        req.userId = decoded.userId;
        next();
    })
}