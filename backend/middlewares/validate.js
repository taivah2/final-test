const Teacher = require('../models/teacher');

const validateTeacherData = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const existingTeacher = await Teacher.findOne({ email });
  if (existingTeacher) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  next();
};

module.exports = {
  validateTeacherData,
};
