const express = require('express');
const teacherController = require('../controllers/teacherController');
const router = express.Router();

router.get('/teachers', teacherController.getTeachers);
router.post('/teachers', teacherController.createTeacher);

module.exports = router;
