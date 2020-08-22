import React, { useState, useEffect } from "react";
import "./App.css";
import { db, auth } from "./Services/firebase";

function App() {
  const intitiaState = null;
  const [students, setStudents] = useState(intitiaState);

  useEffect(() => {
    db.collection("students")
      .get()
      .then((snapshot) => {
        const students = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          students.push(data);
        });
        console.log(students);
        setStudents(students);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <h1>Xanadu High School Studemts</h1>
    </div>
  );
}

export default App;
