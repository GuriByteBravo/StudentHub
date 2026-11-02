import {useState} from "react";
import Dashboard from "./components/dashboard";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";



function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div>
      {currentPage === "dashboard" && (
        <Dashboard
          onAddStudent={() => setCurrentPage("addStudent")}
          onShowStudents={() => setCurrentPage("students")}
          onShowDashboard={() => setCurrentPage("dashboard")}
        />
      )}

      {currentPage === "addStudent" && <StudentForm />}

      {currentPage === "students" && (
        <StudentList
          onShowStudents={() => setCurrentPage("students")}
          onShowDashboard={() => setCurrentPage("dashboard")}
          onAddStudent={() => setCurrentPage("addStudent")}
        />
      )}
    </div>
  );
}

export default App;


