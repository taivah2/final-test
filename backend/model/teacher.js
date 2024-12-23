const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  status: { type: String, required: true },
  address: { type: String, required: true },
  position: { type: String, required: true },
  education: { type: String, required: true },
});

module.exports = mongoose.model('Teacher', teacherSchema);
