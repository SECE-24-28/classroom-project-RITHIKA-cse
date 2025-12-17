const User = require("../models/user");
exports.createUser = async (req, res) => {
  try {
    const { firstName, secondName, email, mobileNumber, password } = req.body;
    const createUser = await User.create({
      firstName,
      secondName,
      email,
      mobileNumber,
      password,
    });
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
      data: createUser,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

exports.createManyUsers = async (req, res) => {
  try {
    const { details } = req.body;
    const createUser = await User.insertMany(details);
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};