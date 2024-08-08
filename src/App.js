// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Journal from './pages/Journal';
import AnnualSchedule from './pages/AnnualSchedule';
import CourseInfo from './pages/CourseInfo';
import MenuBar from './components/MenuBar';

const App = () => {
  return (
    <Router>
      <div>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/annual-schedule" element={<AnnualSchedule />} />
          <Route path="/course-info" element={<CourseInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
