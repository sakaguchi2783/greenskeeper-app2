// src/pages/AnnualSchedule.js
import React, { useState } from 'react';

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

  const handleEdit = (index, event) => {
    const newSchedule = [...schedule];
    newSchedule[index].tasks = event.target.value;
    setSchedule(newSchedule);
  };

  return (
    <div>
      <h2>年間スケジュール</h2>
      {schedule.map((item, index) => (
        <div key={index}>
          <h3>{item.month}</h3>
          <textarea
            value={item.tasks}
            onChange={(e) => handleEdit(index, e)}
          />
        </div>
      ))}
    </div>
  );
};

export default AnnualSchedule;
