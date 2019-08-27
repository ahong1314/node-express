const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

/* GET users listing. */
router.post('/save', userController.save);
router.post('/update', userController.update);
router.get('/findByOpenId', userController.findByOpenId);  //phone, realname, openid

module.exports = router;