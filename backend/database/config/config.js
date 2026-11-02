require("dotenv").config();

module.exports = {
  development: {
    uri: process.env.MONGO_URI,
  },
};