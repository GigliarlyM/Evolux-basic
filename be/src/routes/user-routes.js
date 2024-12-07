const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.post('/', userController.createUsuario);
router.get('/:index', userController.readOneUsuario);
router.put('/:index', userController.uptadeUsuario);
router.delete('/:index', userController.deleteUsuario);
router.get('/', userController.readAllUsuario);
router.get('/nicho/:nicho', userController.searchForNicho);

module.exports = router;