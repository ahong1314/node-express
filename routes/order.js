const express = require('express');
const router = express.Router();
const userController = require('../controllers/order.controller.js');

/* GET users listing. */
router.post('/save', userController.save);

module.exports = router;