// src/pages/AnnualSchedule.js
import React, { useState } from 'react';
import './AnnualSchedule.css';

const AnnualSchedule = () => {
  const [schedule, setSchedule] = useState([
    { month: '1月', tasks: '肥料 新価格\n砂値上げ' },
    { month: '2月', tasks: '除草' },
    { month: '3月', tasks: '除草（ラウンドアップ）' },
    { month: '4月', tasks: '芝種子・備品 新価格' },
    { month: '5月', tasks: '更新作業\n・エアレーション\n・コア除去\n・目砂\n・すり込み\n・散水' },
    { month: '6月', tasks: '成長抑制剤散布' },
    { month: '7月', tasks: '散水調整\n刈り込み' },
    { month: '8月', tasks: '入札' },
    { month: '9月', tasks: '砂値上げ' },
    { month: '10月', tasks: '更新作業\n・エアレーション\n・コア除去\n・目砂\n・すり込み\n・散水' },
    { month: '11月', tasks: '工事案件' },
    { month: '12月', tasks: '冬季作業' }
  ]);

  return (
    <div className="annual-schedule-container">
      <h1>年間スケジュール</h1>
      <table className="annual-schedule-table">
        <thead>
          <tr>
            <th>月</th>
            <th>作業内容</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.tasks.split('\n').map((task, idx) => (
                <div key={idx}>{task}</div>
              ))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnnualSchedule;
