import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CourseList.css";

const CourseList = () => {
  const [search, setSearch] = useState("");

  const courses = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn the fundamentals of React including components and hooks.",
      duration: "4 Weeks",
      level: "Beginner"
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      description: "Deep dive into JavaScript concepts and ES6 features.",
      duration: "6 Weeks",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "HTML & CSS",
      description: "Build responsive websites using HTML5 and CSS3.",
      duration: "3 Weeks",
      level: "Beginner"
    },
    {
      id: 4,
      title: "Node.js Backend",
      description: "Learn server-side development with Node.js and Express.",
      duration: "5 Weeks",
      level: "Intermediate"
    },
    {
      id: 5,
      title: "Full Stack Development",
      description: "Complete web development from frontend to backend.",
      duration: "10 Weeks",
      level: "Advanced"
    },
    {
      id: 6,
      title: "TypeScript Essentials",
      description: "Strong typing for better React applications.",
      duration: "4 Weeks",
      level: "Intermediate"
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="course-container">
      <h1 className="heading">📚 Available Courses</h1>

      <input
        type="text"
        placeholder="Search courses..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="course-grid">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Level:</strong> {course.level}</p>

            <Link to={`/course/${course.id}`} className="view-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
