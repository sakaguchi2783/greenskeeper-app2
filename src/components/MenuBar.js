// src/components/MenuBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/home.png'; // アイコン画像をインポート
import journalIcon from '../assets/journal.png';
import scheduleIcon from '../assets/schedule.png';
import courseIcon from '../assets/course.png';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <Link to="/" className="menu-item">
        <img src={homeIcon} alt="ホーム" className="menu-icon" />
        ホーム
      </Link>
      <Link to="/journal" className="menu-item">
        <img src={journalIcon} alt="日誌モード" className="menu-icon" />
        日誌モード
      </Link>
      <Link to="/annual-schedule" className="menu-item">
        <img src={scheduleIcon} alt="年間スケジュール" className="menu-icon" />
        年間スケジュール
      </Link>
      <Link to="/course-info" className="menu-item">
        <img src={courseIcon} alt="コース情報" className="menu-icon" />
        コース情報
      </Link>
    </div>
  );
};

export default MenuBar;
