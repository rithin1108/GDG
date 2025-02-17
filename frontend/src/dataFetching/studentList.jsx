import React, { useEffect, useState } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <strong>{student.fullName}</strong> - {student.email} - {student.className} {student.section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
