const User = require("../models/User");
exports.register = async (req, res) => {
  try {
    const {
      emri,
      mbiemri,
      username,
      email,
      password,
      gender,
      ditlindjaViti,
      ditlindjaMuaji,
      ditlindjaDita,
    } = req.body;
    const user = await new User({
      emri,
      mbiemri,
      username,
      email,
      password,
      gender,
      ditlindjaViti,
      ditlindjaMuaji,
      ditlindjaDita,
    }).save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
