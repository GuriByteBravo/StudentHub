import Joi from 'joi';
const addStudent = Joi.object({
  name: Joi.string().required().messages({
     "string.empty": `name cannot be an empty field`,
    "any.required": 'name is required'
  }),
  age: Joi.number().required().messages({
    "number.empty": `age cannot be an empty field`,
   "any.required": 'age is required'
 }),
  email: Joi.string().email().trim().required().messages({
    "string.empty": `email cannot be an empty field`,
    "any.required": 'email is required'
  }),
  gender: Joi.string().required().messages({
    "string.empty": `gender cannot be an empty field`,
    "any.required": 'gender is required'
  }),
  phone: Joi.string().required().messages({
    "string.empty": `phone cannot be an empty field`,
    "any.required": 'phone is required'
  }),
  course: Joi.string().required().messages({
    "string.empty": `course cannot be an empty field`,
    "any.required": 'course is required'
  }),
})


module.exports = { addStudent }
