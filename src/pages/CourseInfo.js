// src/pages/CourseInfo.js
import React from 'react';
import './CourseInfo.css';

const CourseInfo = () => {
  const courseInfo = [
    { hole: '1', par: '4', distance: '450' },
    { hole: '2', par: '3', distance: '150' },
    // 他のホールの情報もここに追加できます
  ];

  return (
    <div className="course-info-container">
      <h1>コース情報</h1>
      <table className="course-info-table">
        <thead>
          <tr>
            <th>ホール番号</th>
            <th>パー</th>
            <th>距離 (ヤード)</th>
          </tr>
        </thead>
        <tbody>
          {courseInfo.map((item, index) => (
            <tr key={index}>
              <td>{item.hole}</td>
              <td>{item.par}</td>
              <td>{item.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseInfo;
