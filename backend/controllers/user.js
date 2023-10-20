const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/Validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { generateToken } = require("../helpers/Tokens");
const { sendVerificationEmail } = require("../helpers/Mailer");

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

    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m"
    );
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.emri, url);
    const token = generateToken({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: user.username,
      profili: user.profili,
      emri: user.emri,
      mbiemri: user.mbiemri,
      token: token,
      verified: user.verified,
      message: "Register Success | Please activate your email to start",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.activateAccount = async (req, res) => {
  try {
    const { token } = req.body;
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(user);
    const check = await User.findById(user.id);
    if (check.verified == true) {
      return res
        .status(400)
        .json({ message: "This email is already activated" });
    } else {
      await User.findByIdAndUpdate(user.id, { verified: true });
      return res.status(200).json({ message: "Account has been activated" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "This email not existing" });
    }
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res
        .status(400)
        .json({ message: "Invalid credentials, please try again" });
    }
    const token = generateToken({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: user.username,
      profili: user.profili,
      emri: user.emri,
      mbiemri: user.mbiemri,
      token: token,
      verified: user.verified,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.auth = async (req, res) => {
  console.log(req.user);
  res.send("Authh hello");
};
