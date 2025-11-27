import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ViewDetails.css';

const courseDetails = {
  1: {
    title: "React Basics",
    description: "A comprehensive course that teaches you React, a powerful JavaScript library for building user interfaces. Master the fundamentals of React including components, hooks, and state management to create interactive and dynamic web applications.",
    fullDescription: "This course is designed for beginners who want to learn React from scratch. You'll start with the basics of JSX, components, and props, then move on to more advanced concepts like hooks, state management, and side effects. By the end of this course, you'll be able to build modern, interactive React applications.",
    duration: "4 Weeks",
    timePeriod: "10-15 Hours",
    level: "Beginner",
    learn: [
      "Understand React fundamentals and component architecture",
      "Master JSX syntax and component composition",
      "Learn to manage component state with useState hook",
      "Implement side effects using useEffect hook",
      "Build reusable and maintainable React components",
      "Handle user interactions and form inputs",
      "Work with props and component communication",
      "Create dynamic and interactive user interfaces"
    ]
  },
  2: {
    title: "JavaScript Mastery",
    description: "Deep dive into JavaScript concepts and ES6+ features. Learn advanced JavaScript patterns, asynchronous programming, closures, and modern JavaScript syntax to become a proficient JavaScript developer.",
    fullDescription: "This intermediate-level course takes you beyond the basics of JavaScript. You'll explore advanced concepts like closures, promises, async/await, the event loop, and ES6+ features. Learn to write clean, efficient, and maintainable JavaScript code that follows best practices.",
    duration: "6 Weeks",
    timePeriod: "15-20 Hours",
    level: "Intermediate",
    learn: [
      "Master closures and scope in JavaScript",
      "Understand asynchronous JavaScript with Promises and async/await",
      "Learn the JavaScript event loop and execution context",
      "Explore ES6+ features: destructuring, spread operator, template literals",
      "Implement advanced array methods and functional programming",
      "Work with modules and modern JavaScript architecture",
      "Handle errors and debug JavaScript applications effectively",
      "Understand prototype chain and object-oriented JavaScript"
    ]
  },
  3: {
    title: "HTML & CSS",
    description: "Build responsive and modern websites using HTML5 and CSS3. Learn the foundations of web development, including semantic HTML, CSS Grid, Flexbox, and responsive design principles.",
    fullDescription: "Start your web development journey with this beginner-friendly course. You'll learn to structure web pages with semantic HTML5 and style them beautifully with CSS3. Master modern layout techniques including Flexbox and CSS Grid to create responsive websites that work on all devices.",
    duration: "3 Weeks",
    timePeriod: "8-12 Hours",
    level: "Beginner",
    learn: [
      "Write semantic and accessible HTML5 code",
      "Master CSS fundamentals: selectors, properties, and values",
      "Create responsive layouts with Flexbox and CSS Grid",
      "Implement modern CSS features: custom properties, animations",
      "Build mobile-first responsive websites",
      "Style forms, buttons, and interactive elements",
      "Understand CSS specificity and cascade",
      "Optimize CSS for performance and maintainability"
    ]
  },
  4: {
    title: "Node.js Backend",
    description: "Learn server-side development with Node.js and Express. Build RESTful APIs, work with databases, implement authentication, and deploy backend applications to production.",
    fullDescription: "This course teaches you how to build robust backend applications using Node.js. You'll learn to create REST APIs, interact with databases like MongoDB, implement user authentication and authorization, handle file uploads, and deploy your applications. Perfect for developers looking to become full-stack developers.",
    duration: "5 Weeks",
    timePeriod: "12-18 Hours",
    level: "Intermediate",
    learn: [
      "Build RESTful APIs with Express.js framework",
      "Connect and work with MongoDB database",
      "Implement user authentication and JWT tokens",
      "Handle file uploads and middleware in Express",
      "Work with environment variables and configuration",
      "Implement error handling and validation",
      "Test backend APIs with Postman and testing frameworks",
      "Deploy Node.js applications to cloud platforms"
    ]
  },
  5: {
    title: "Full Stack Development",
    description: "Complete web development from frontend to backend. Learn to build end-to-end web applications, integrate frontend and backend, implement user authentication, and deploy full-stack applications.",
    fullDescription: "This comprehensive course covers the entire web development stack. You'll learn to build complete web applications from scratch, including both frontend and backend components. Master database design, API development, user authentication, and deployment strategies to become a full-stack developer.",
    duration: "10 Weeks",
    timePeriod: "25-35 Hours",
    level: "Advanced",
    learn: [
      "Design and develop full-stack web applications",
      "Integrate React frontend with Node.js backend",
      "Implement secure user authentication and authorization",
      "Design and manage databases (SQL and NoSQL)",
      "Build RESTful and GraphQL APIs",
      "Implement real-time features with WebSockets",
      "Deploy applications using modern DevOps practices",
      "Apply best practices for code organization and architecture"
    ]
  },
  6: {
    title: "TypeScript Essentials",
    description: "Strong typing for better React applications. Learn TypeScript to add type safety, improve code quality, catch errors early, and build more maintainable and scalable applications.",
    fullDescription: "Take your JavaScript and React skills to the next level with TypeScript. This course teaches you how to add type safety to your applications, use TypeScript with React, leverage advanced types, and write more robust code. Perfect for developers who want to build enterprise-grade applications.",
    duration: "4 Weeks",
    timePeriod: "10-15 Hours",
    level: "Intermediate",
    learn: [
      "Understand TypeScript fundamentals and type system",
      "Master basic and advanced types: interfaces, unions, generics",
      "Use TypeScript with React and create typed components",
      "Implement type guards and type narrowing",
      "Work with utility types and type transformations",
      "Configure TypeScript compiler and tsconfig.json",
      "Migrate JavaScript projects to TypeScript",
      "Apply TypeScript best practices and patterns"
    ]
  }
};

function ViewDetails() {
  const { id } = useParams();
  const course = courseDetails[id];

  if (!course) {
    return (
      <div className="details-container">
        <p className="error-message">Course not found</p>
        <Link to="/" className="back-link">← Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="details-wrapper">
        <div className="details-content">
          <div className="details-header">
            <h1 className="course-title">{course.title}</h1>
            <Link to="/" className="back-link">← Back to Courses</Link>
          </div>
          
          <div className="course-meta">
            <div className="meta-item">
              <span className="meta-icon">⏱️</span>
              <span className="meta-label">Duration:</span>
              <span className="meta-value">{course.duration}</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🕒</span>
              <span className="meta-label">Time Period:</span>
              <span className="meta-value">{course.timePeriod}</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📊</span>
              <span className="meta-label">Level:</span>
              <span className="meta-value">{course.level}</span>
            </div>
          </div>

          <div className="course-description">
            <h2>Course Description</h2>
            <p className="description-text">{course.fullDescription || course.description}</p>
          </div>

          <div className="learning-outcomes">
            <h2>What You Will Learn In This Course</h2>
            <ul className="learn-list">
              {course.learn.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
