import  {
    getAllUsers,
    createUser,
    getSingleUser ,
    updatePassword,
    updateUser
} from "../controllers/userController.js"
import express from "express"
import { authentication , authorizePermissions } from "../middleware/authentication.js";

const router = express.Router()

router.route('/').get(authentication , authorizePermissions("admin") , getAllUsers);
router.route('/updateUser').patch(authentication , updateUser);
router.route("/adduser").post(authentication ,authorizePermissions("admin"), createUser)
router.route("/UpdatePassword").patch(updatePassword)
router.route("/:id").get(getSingleUser)
export default router;