/** This file is for DB abstraction  */
const { User } = require("../models");

const createData = async (body) => {
  return await User.create(body);
};

const updateData = async (body, params) => {
  const updatedUser = await User.findByIdAndUpdate(params.id, { ...body });
  return updatedUser;
};

module.exports = { createData, updateData };
