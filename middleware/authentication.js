import {UnauthenticatedError,UnauthorizededError } from "../errors/index.js"
import jwt from "jsonwebtoken";


const authentication = async (req , res , next) => {
  const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith("Bearer")){
      throw new UnauthenticatedError ("Authentication Invalid")
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //console.log(payload)
    // attach the user request object
    // req.user = payload
    req.user = { userId: payload.userId , userRole: payload.role , userName : payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
}

const authorizePermissions = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.userRole)) {
        throw new UnauthorizededError(
          'Unauthorized to access this route'
        );
      }
      next();
    };
  };
export {
    authorizePermissions , 
    authentication
}