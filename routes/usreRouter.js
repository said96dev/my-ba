import  {
    getAllUsers,
    getSingleUser,
    createUser,
    showCurrentUser ,
    updateUser
} from "../constrollers/userController.js"
import express from "express"
const router = express.Router()

router.route('/').get(getAllUsers);
router.route('/showMe').get(showCurrentUser);
router.route('/updateUser').patch(updateUser);
router.route('/:id').get(getSingleUser);
router.route("/adduser").post(createUser)

export default router;