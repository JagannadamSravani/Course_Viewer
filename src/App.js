
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './CourseList';
import ViewDetails from './ViewDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:id" element={<ViewDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
