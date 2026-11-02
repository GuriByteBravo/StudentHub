import { useState } from "react";
import "./StudentList.css";
import Sidebar from "./sidebar";
import "./dashboard.css";

function StudentList({ onShowStudents, onShowDashboard, onAddStudent }) {

    //create sample data for students
    const [students] = useState([
        {
            id: 1,
            name: "Gurjeet Kaur",
            email: "gurjeet@example.com",
            course: "Computer Engineering",
            gender: "Female"
        },
        {
            id: 2,
            name: "Rahul Sharma",
            email: "rahul@example.com",
            course: "BCA",
            gender: "Male",
            status: "Active",
        },
        {
            id: 3,
            name: "Priya Verma",
            email: "priya@example.com",
            course: "MCA",
            gender: "Female",
        },
        {
            id: 4,
            name: "Aman Kumar",
            email: "aman@example.com",
            course: "Computer Engineering",
            gender: "Male",
        }
    ])
    return (
        <div className="dashboard-layout">
            <Sidebar
                onShowStudents={onShowStudents}
                onShowDashboard={onShowDashboard}
                onAddStudent={onAddStudent}
            />

            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div>
                        <h1>Student List</h1>
                        <p>Manage and view all registered students.</p>
                    </div>
                </header>
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f1f5f9", textAlign: "left" }}>
                            <th style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>ID</th>
                            <th style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>Name</th>
                            <th style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>Email</th>
                            <th style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>Course</th>
                            <th style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>Gender</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{student.id}</td>
                                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{student.name}</td>
                                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{student.email}</td>
                                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{student.course}</td>
                                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{student.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default StudentList;