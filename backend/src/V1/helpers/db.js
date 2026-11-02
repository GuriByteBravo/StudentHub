const mongoose = require("mongoose");
const Student = require("../../../database/models/students");

class DB {
  async init() {
    try {
      await mongoose.connect(process.env.MONGO_URI);

      console.log("MongoDB connected successfully");

      // Automatically create the students collection
      await Student.createCollection();

      console.log("Students collection created successfully");
    } catch (error) {
      // Collection may already exist
      if (error.code === 48) {
        console.log("Students collection already exists");
      } else {
        console.error("MongoDB initialization failed:", error.message);
        throw error;
      }
    }
  }

  checkConnection() {
    return mongoose.connection.readyState === 1;
  }

  getDB() {
    return mongoose.connection;
  }
}

module.exports = DB;