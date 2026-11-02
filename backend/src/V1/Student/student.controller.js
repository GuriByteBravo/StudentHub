require("dotenv").config();
import Services from "./student.services.js";
import { RESPONSE_CODES, ROLES } from "../../../config/constants.js";
import {
  successResponse,
  errorResponse,
} from "../../../config/responseHelper.js";
import { CommonMessages } from "../../../constants/message/common";


export default class Student {
  async init(db) {
    this.services = new Services();
    this.Models = db.models;
    await this.services.init(db);
  }

  /* Add Student  */
async addStudent(req, res) {
  try {
    const { body } = req;

    const payload = {
      name: body.name,
      email: body.email,
      age: body.age,
      gender: body.gender,
      phone: body.phone,
      course: body.course
    };

    const student = await this.services.addStudent(payload);

    return res
      .status(RESPONSE_CODES.POST)
      .json(
        successResponse(
          CommonMessages.STUDENT_ADDED_SUCCESS,
          student,
          RESPONSE_CODES.POST
        )
      );

  } catch (error) {
    console.error("Error in addStudent:", error);

    return res
      .status(RESPONSE_CODES.SERVER_ERROR)
      .json(
        errorResponse(
          error.message,
          null,
          RESPONSE_CODES.SERVER_ERROR
        )
      );
  }
}



}