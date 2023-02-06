const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

router.get('/', mainController.index);
router.get('/vision', mainController.vision)
router.get('/quienes', mainController.quienes);


module.exports = router;