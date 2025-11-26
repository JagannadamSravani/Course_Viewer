
import React from "react";
import { useParams } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    title: "React Basics",
    duration: "4 Weeks",
    whatYouLearn: ["JSX", "Components", "Hooks"],
    includes: ["Videos", "Notes"],
    content: ["Intro", "Practice", "Project"]
  }
];

const ViewDetails = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  return (
    <div>
      <h2>{course.title}</h2>
      <p><b>Duration:</b> {course.duration}</p>

      <h3>What You Learn</h3>
      <ul>{course.whatYouLearn.map((i, idx) => <li key={idx}>{i}</li>)}</ul>

      <h3>Course Includes</h3>
      <ul>{course.includes.map((i, idx) => <li key={idx}>{i}</li>)}</ul>

      <h3>Course Content</h3>
      <ul>{course.content.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
    </div>
  );
};

export default ViewDetails;
