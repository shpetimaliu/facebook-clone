const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/Validation");
const bcrypt = require("bcrypt");

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

    if (!validateEmail(email)) {
      return res.status(400).send({ message: "Invalid Email" });
    }

    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).send({ message: "This email alredy used" });
    }

    if (!validateLength(emri, 3, 50)) {
      return res
        .status(400)
        .send({ message: "Name must between 3 and 50 character" });
    }

    if (!validateLength(mbiemri, 3, 50)) {
      return res
        .status(400)
        .send({ message: "Lastname must between 3 and 50 character" });
    }

    if (!validateLength(password, 8, 50)) {
      return res
        .status(400)
        .send({ message: "Password must between 8 and 50 character" });
    }

    const cryptPass = await bcrypt.hash(password, 15);

    let tempUsername = emri + mbiemri;
    let newUsername = await validateUsername(tempUsername);

    const user = await new User({
      emri,
      mbiemri,
      username: newUsername,
      email,
      password: cryptPass,
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
