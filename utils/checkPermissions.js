import {UnauthenticatedError} from "../errors/index.js"
const checkPermissions = (requestUser, resourceUserId) => {

  if (requestUser.userId === resourceUserId.toString() || typeof resourceUserId !== "object") return
  
  if (requestUser.userRole === 'admin'||requestUser.userRole === 'team leader') return;
  
  if(resourceUserId.map((item) => (requestUser.userId === item._id.toString()))) return;

  throw new UnauthenticatedError('Not authorized to access this route')
}

export default checkPermissions