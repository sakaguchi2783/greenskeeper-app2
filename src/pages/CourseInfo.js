// src/pages/CourseInfo.js
import React from 'react';
import './CourseInfo.css';

const CourseInfo = () => {
  const courseInfo = [
    { hole: '1', par: '4', distance: '450' },
    { hole: '2', par: '3', distance: '150' },
    { hole: '3', par: '4', distance: '360' },
    { hole: '4', par: '3', distance: '250' },
    { hole: '5', par: '4', distance: '450' },
    { hole: '6', par: '5', distance: '650' },
    { hole: '7', par: '4', distance: '380' },
    { hole: '8', par: '5', distance: '600' },
    { hole: '9', par: '4', distance: '370' },
    { hole: '10', par: '4', distance: '450' },
    { hole: '11', par: '3', distance: '150' },
    { hole: '12', par: '4', distance: '360' },
    { hole: '13', par: '3', distance: '250' },
    { hole: '14', par: '4', distance: '450' },
    { hole: '15', par: '5', distance: '650' },
    { hole: '16', par: '4', distance: '380' },
    { hole: '17', par: '5', distance: '600' },
    { hole: '18', par: '4', distance: '370' },
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
