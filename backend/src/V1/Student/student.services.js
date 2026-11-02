import mongoose from "mongoose";
import StudentModel from "../../../database/models/students.js";

class Student {
  async init() {
    if (mongoose.connection.readyState !== 1) {
      throw new Error("MongoDB is not connected");
    }

    console.log("Student service initialized with MongoDB");
  }

  /** Create Student */
 async addStudent(data) {
  return await StudentModel.create(data);
}
}

export default Student;