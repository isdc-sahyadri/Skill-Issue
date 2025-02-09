const Developer = require('../models/Developer');

// Get all developers
exports.getAllDevelopers = async (req, res) => {
  try {
    const developers = await Developer.find();
    res.json(developers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new developer
exports.createDeveloper = async (req, res) => {
  const developer = new Developer(req.body);
  try {
    const newDeveloper = await developer.save();
    res.status(201).json(newDeveloper);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add other CRUD operations as needed