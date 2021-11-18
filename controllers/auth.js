const brcypt = require("bcrypt");
const { Unauthorized } = require("http-errors");
const { BadRequestError } = require("../errors");
const User = require("../models/User");

const register = (req, res) => {
  const { name, password, email } = req.body;

  const salt = brcypt.genSalt(10);
  console.log(password);
  console.log(bcrypt.hash(password));
  res.send(req.body);

  //encrypting is ligma balls heheheh sjjdjjsj firewall

  // hashing which scrambles your data
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please provide info i need it");
  }

  const userLogin = await User.findOne({ email });

  if (!user) {
    throw new Unauthorized("invalid credentials");
  }

  const isPasswordCorrect = await userLogin.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new Unauthorized("invalid credentials");
  }

  const token = user.createJWT();
  res.json({ user: { name: userLogin.name }, token });
};

module.exports = { register, login };