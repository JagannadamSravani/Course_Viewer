
import React, { useState } from "react";
import { Link } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    title: "React Basics",
    description: "Introduction to React fundamentals",
    duration: "4 Weeks",
    whatYouLearn: ["JSX & Components", "Props & State", "Hooks basics"],
    includes: ["Video lessons", "PDF notes", "Assignments"],
    content: ["Week 1 - Introduction", "Week 2 - Components", "Week 3 - Hooks", "Week 4 - Mini Project"]
  }
];

const CourseList = () => {
  const [search, setSearch] = useState("");

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Course List</h1>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses" />
      {filteredCourses.map(course => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <Link to={`/course/${course.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
