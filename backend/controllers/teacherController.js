const Teacher = require('../models/teacher');

exports.getTeachers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const teachers = await Teacher.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(teachers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createTeacher = async (req, res) => {
  const { name, email, phone, status, address, position, education } = req.body;
  try {
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).send('Email already exists');
    }

    const code = Math.floor(1000 + Math.random() * 9000).toString();
    const teacher = new Teacher({ code, name, email, phone, status, address, position, education });
    await teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
