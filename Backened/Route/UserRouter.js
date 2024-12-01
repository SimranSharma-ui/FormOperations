const express = require('express');
const { CreateUser, GetAllUser,updateUser ,GetUserbyId ,deleteUser } = require('../Controller/UserController');
 
const router = express.Router();

router.post('/Create',CreateUser);
router.get('/getAllUsers',GetAllUser);
router.get('/getOneUser/:id',GetUserbyId);
router.put('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);

module.exports = router;