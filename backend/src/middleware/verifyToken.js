import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"


export const verifyToken = (req, res, next) => {
    const token = req.cookies.token
        if(!token){
        return res.status(400).json({message:"Unauthorized" })}
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded) return res.status(400).json({message:"Unauthorized" })

        req.userId = decoded.userId
        next()
        }
    catch (error) {
        console.log("Error in verifyToken ", error) 
       return res.status(500).json({message: "Server error"})
    }
}