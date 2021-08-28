const { User } = require("../models");

async function createData(body) {
  return await User.create(body);
}

async function updateData(body, params) {
  const updatedUser = await User.findByIdAndUpdate(params.id, { ...body });
  return updatedUser;
}

module.exports = { createData, updateData };
