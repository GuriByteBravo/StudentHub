require("dotenv").config();

module.exports = {
  port: Number(process.env.PORT) || 3000,

  db: {
    mongo: {
      uri: process.env.MONGO_URI,
    },
  },

  logger: {
    maxSize: 512000,
    maxFiles: 100,
  },
};