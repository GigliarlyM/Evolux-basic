const express = require('express');
const router = express.Router();
const iaController = require('../controllers/gemini-controller');

router.route('/')
.post(iaController.searchQuestion)

module.exports = router;