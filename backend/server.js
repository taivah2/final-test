const express = require('express');
const mongoose = require('mongoose');
const teacherRoutes = require('./routes/teacherRoutes');
const positionRoutes = require('./routes/positionRoutes');
const cors = require('cors');
require('./config/db');  // Kết nối MongoDB

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', teacherRoutes);
app.use('/api', positionRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
