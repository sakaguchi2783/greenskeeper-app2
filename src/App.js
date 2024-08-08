import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Journal from './pages/Journal';
import AnnualSchedule from './pages/AnnualSchedule';
import CourseInfo from './pages/CourseInfo';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/journal">日誌モード</Link>
            </li>
            <li>
              <Link to="/annual-schedule">年間スケジュール</Link>
            </li>
            <li>
              <Link to="/course-info">コース情報</Link>
            </li>
          </ul>
        </nav>
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
