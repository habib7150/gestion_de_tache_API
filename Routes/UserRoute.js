const express = require('express');

const UserController = require('./controllers/UserController');

const router = express.Router();

router.get("/",(request,result) => {UserController.authontificateUser(request,result);});

router.post("/:userId",(request,result) => {UserController.getUserByID(request,result);});

router.post("/",(request,result) => {UserController.createUser(request,result);});



module.exports = router;  


