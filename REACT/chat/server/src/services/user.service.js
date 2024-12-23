const { User } = require("../models");

const createUser = async (reqBody) => {
  return User.create(reqBody);
};

const findUserByEmail = async (email) => {
  return await User.findOne(email);
};

const findUserAndUpdate = async (_id, token) => {
  return await User.findByIdAndUpdate(
    { _id },
    {
      $set: { token },
    },
    { new: true }
  );
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

const deleteUserByEmail = async (email) => {
  return User.findOneAndDelete({ email: email });
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserAndUpdate,
  getUserByEmail,
  deleteUserByEmail
};
