require("dotenv").config();

const db = {
  development: {
    mongo: {
      uri:
        process.env.MONGO_URI ||
        "mongodb://127.0.0.1:27017/student_management",
    },
  },
};

module.exports = db;