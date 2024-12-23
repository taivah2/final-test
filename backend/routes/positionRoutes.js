const express = require('express');
const positionController = require('../controllers/positionController');
const router = express.Router();

router.get('/teacher-positions', positionController.getPositions);
router.post('/teacher-positions', positionController.createPosition);

module.exports = router;
