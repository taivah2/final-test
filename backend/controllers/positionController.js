const Position = require('../models/position');

exports.getPositions = async (req, res) => {
  try {
    const positions = await Position.find();
    res.json(positions);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createPosition = async (req, res) => {
  const { name } = req.body;
  try {
    const existingPosition = await Position.findOne({ name });
    if (existingPosition) {
      return res.status(400).send('Position already exists');
    }

    const code = Math.floor(1000 + Math.random() * 9000).toString();
    const position = new Position({ code, name });
    await position.save();
    res.status(201).json(position);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
