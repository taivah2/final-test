const express = require('express');
const teacherRoutes = require('./routes/teacherRoutes');
const positionRoutes = require('./routes/positionRoutes');
require('./config/db'); // Kết nối MongoDB

const app = express();

app.use(express.json());
app.use('/api', teacherRoutes);
app.use('/api', positionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
