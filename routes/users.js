const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

/* GET users listing. */
router.post('/save', userController.save);

module.exports = router;