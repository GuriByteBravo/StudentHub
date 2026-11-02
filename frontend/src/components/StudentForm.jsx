import { useState } from "react";
import axios from "axios";
import "../App.css";

function StudentForm() {
  const initialFormData = {
    name: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
    course: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit student details
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setMessageType("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/v1/student/add",
        {
          ...formData,
          age: Number(formData.age),
        }
      );

      setMessage(
        response.data.message || "Student added successfully!"
      );
      setMessageType("success");

      setFormData(initialFormData);
    } catch (error) {
      console.error("Error adding student:", error);

      setMessage(
        error.response?.data?.message ||
          "Unable to add student. Please try again."
      );

      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="student-form">
      {/* Form Header */}
      <div className="form-header">
        <div className="form-icon">🎓</div>

        <div>
          <h2>
            Add <span>Student</span>
          </h2>

          <p className="form-description">
            Fill in the details below to register a new student.
            <br />
            Make sure all information is correct.
          </p>
        </div>
      </div>

      {/* Student Form */}
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="name">
            Full Name <span className="required">*</span>
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter student name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">
            Email Address <span className="required">*</span>
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age">
            Age <span className="required">*</span>
          </label>

          <input
            id="age"
            type="number"
            name="age"
            placeholder="Enter age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label htmlFor="gender">
            Gender <span className="required">*</span>
          </label>

          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>

          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>

        {/* Course */}
        <div className="form-group">
          <label htmlFor="course">
            Course <span className="required">*</span>
          </label>

          <input
            id="course"
            type="text"
            name="course"
            placeholder="Enter course name"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={loading}>
          {loading ? (
            <>
              <span className="button-spinner"></span>
              Adding Student...
            </>
          ) : (
            <>
              <span className="button-plus">+</span>
              Add Student
            </>
          )}
        </button>
      </form>

      {/* Success / Error Message */}
      {message && (
        <div
          className={`form-message ${messageType}`}
          role="status"
          aria-live="polite"
        >
          <span className="message-icon">
            {messageType === "success" ? "✓" : "!"}
          </span>

          <span>{message}</span>
        </div>
      )}

      {/* Footer */}
      <div className="form-footer">
        <span></span>
        <p>💜 Build a better future with education</p>
        <span></span>
      </div>
    </div>
  );
}

export default StudentForm;