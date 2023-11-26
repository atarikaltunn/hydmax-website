const express = require('express');
const engController = require('../controllers/engController');

const router = express.Router();

router.route('/').get(engController.getMainPage);

module.exports = router;
