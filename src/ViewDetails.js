
import React from 'react';
import { useParams } from 'react-router-dom';

const details = {
  1: {
    learn: "Components, Props, Hooks",
    includes: "Projects, Exercises",
    content: "JSX, State, Effects"
  },
  2: {
    learn: "Closures, Async JS",
    includes: "Advanced Problems",
    content: "Promises, Event Loop"
  }
};

function ViewDetails() {
  const { id } = useParams();
  const course = details[id];

  if (!course) return <p>Course not found</p>;

  return (
    <div>
      <h2>Course Details</h2>
      <p><strong>What you will learn:</strong> {course.learn}</p>
      <p><strong>Course includes:</strong> {course.includes}</p>
      <p><strong>Course content:</strong> {course.content}</p>
    </div>
  );
}
export default ViewDetails;
