// src/pages/Journal.js
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { supabase } from '../supabaseClient';
import './Journal.css';

const localizer = momentLocalizer(moment);

const Journal = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [entry, setEntry] = useState({
    weather: { temperature: '', humidity: '', rainfall: '', windSpeed: '', notes: '' },
    grass: { density: '', color: '', disease: '', notes: '' },
    maintenance: {
      mowingHeight: '', mowingFrequency: '', aeration: '', fertilization: '',
      irrigation: '', pestControl: '', sandUsed: '', notes: ''
    },
    equipment: { sprinkler: '', drainSystem: '', cartPath: '', notes: '' },
    staff: { name: '', task: '', notes: '' },
    special: { incidents: '' }
  });
  const [entries, setEntries] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchJournalEntries();
  }, []);

  const fetchJournalEntries = async () => {
    const { data, error } = await supabase.from('journal_entries').select('*');
    if (error) {
      console.error('Error fetching entries:', error);
    } else {
      setEntries(data);
      const newEvents = data.map((entry) => ({
        title: `日誌`,
        start: new Date(entry.date),
        end: new Date(entry.date),
        allDay: true,
      }));
      setEvents(newEvents);
    }
  };

  const handleDateClick = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    const selectedEntry = entries.find(entry => 
      new Date(entry.date).toDateString() === slotInfo.start.toDateString()
    );
    if (selectedEntry) {
      setEntry(selectedEntry);
    } else {
      setEntry({
        weather: { temperature: '', humidity: '', rainfall: '', windSpeed: '', notes: '' },
        grass: { density: '', color: '', disease: '', notes: '' },
        maintenance: {
          mowingHeight: '', mowingFrequency: '', aeration: '', fertilization: '',
          irrigation: '', pestControl: '', sandUsed: '', notes: ''
        },
        equipment: { sprinkler: '', drainSystem: '', cartPath: '', notes: '' },
        staff: { name: '', task: '', notes: '' },
        special: { incidents: '' }
      });
    }
  };

  const handleInputChange = (section, field, value) => {
    setEntry(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const saveJournalEntry = async () => {
    if (selectedDate) {
      const { data, error } = await supabase
        .from('journal_entries')
        .upsert([
          {
            date: selectedDate,
            weather: entry.weather,
            grass: entry.grass,
            maintenance: entry.maintenance,
            equipment: entry.equipment,
            staff: entry.staff,
            special: entry.special
          }
        ]);

      if (error) {
        console.error('Error saving entry:', error);
      } else {
        console.log('Entry saved:', data);
        fetchJournalEntries();
      }
    }
  };

  return (
    <div className="journal-container">
      <h1>日誌モード</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleDateClick}
        selectable
        selected={selectedDate} // 選択された日付を強調
      />
      {selectedDate && (
        <div className="entry-form">
          <h2>選択された日付: {selectedDate.toDateString()}</h2>

          <div>
            <h3>天候と気象条件</h3>
            <input
              type="number"
              placeholder="気温"
              value={entry.weather.temperature}
              onChange={(e) => handleInputChange('weather', 'temperature', e.target.value)}
            />
            <input
              type="number"
              placeholder="湿度"
              value={entry.weather.humidity}
              onChange={(e) => handleInputChange('weather', 'humidity', e.target.value)}
            />
            <input
              type="number"
              placeholder="降雨量"
              value={entry.weather.rainfall}
              onChange={(e) => handleInputChange('weather', 'rainfall', e.target.value)}
            />
            <select
              value={entry.weather.windSpeed}
              onChange={(e) => handleInputChange('weather', 'windSpeed', e.target.value)}
            >
              <option value="">風速</option>
              <option value="11m以上">11m以上</option>
              <option value="10m～8m">10m～8m</option>
              <option value="7m～5m">7m～5m</option>
              <option value="4ｍ～3m">4ｍ～3m</option>
              <option value="無風">無風</option>
            </select>
            <textarea
              placeholder="備考"
              value={entry.weather.notes}
              onChange={(e) => handleInputChange('weather', 'notes', e.target.value)}
            ></textarea>
          </div>

          <div>
            <h3>芝生の状態</h3>
            <select
              value={entry.grass.density}
              onChange={(e) => handleInputChange('grass', 'density', e.target.value)}
            >
              <option value="">密度</option>
              <option value="多い">多い</option>
              <option value="普通">普通</option>
              <option value="少ない">少ない</option>
            </select>
            <select
              value={entry.grass.color}
              onChange={(e) => handleInputChange('grass', 'color', e.target.value)}
            >
              <option value="">色</option>
              <option value="良い">良い</option>
              <option value="普通">普通</option>
              <option value="悪い">悪い</option>
            </select>
            <textarea
              placeholder="病害の発生状況"
              value={entry.grass.disease}
              onChange={(e) => handleInputChange('grass', 'disease', e.target.value)}
            ></textarea>
            <textarea
              placeholder="備考"
              value={entry.grass.notes}
              onChange={(e) => handleInputChange('grass', 'notes', e.target.value)}
            ></textarea>
          </div>

          <div>
            <h3>メンテナンス作業</h3>
            <input
              type="number"
              placeholder="刈り込みの高さ"
              value={entry.maintenance.mowingHeight}
              onChange={(e) => handleInputChange('maintenance', 'mowingHeight', e.target.value)}
            />
            <input
              type="text"
              placeholder="刈り込みの頻度"
              value={entry.maintenance.mowingFrequency}
              onChange={(e) => handleInputChange('maintenance', 'mowingFrequency', e.target.value)}
            />
            <select
              value={entry.maintenance.aeration}
              onChange={(e) => handleInputChange('maintenance', 'aeration', e.target.value)}
            >
              <option value="">エアレーション</option>
              <option value="済">済</option>
              <option value="未">未</option>
            </select>
            <input
              type="text"
              placeholder="施肥"
              value={entry.maintenance.fertilization}
              onChange={(e) => handleInputChange('maintenance', 'fertilization', e.target.value)}
            />
            <input
              type="text"
              placeholder="散水"
              value={entry.maintenance.irrigation}
              onChange={(e) => handleInputChange('maintenance', 'irrigation', e.target.value)}
            />
            <textarea
              placeholder="病害虫の防除"
              value={entry.maintenance.pestControl}
              onChange={(e) => handleInputChange('maintenance', 'pestControl', e.target.value)}
            ></textarea>
            <textarea
              placeholder="使った砂"
              value={entry.maintenance.sandUsed}
              onChange={(e) => handleInputChange('maintenance', 'sandUsed', e.target.value)}
            ></textarea>
            <textarea
              placeholder="備考"
              value={entry.maintenance.notes}
              onChange={(e) => handleInputChange('maintenance', 'notes', e.target.value)}
            ></textarea>
          </div>

          <div>
            <h3>設備の管理</h3>
            <select
              value={entry.equipment.sprinkler}
              onChange={(e) => handleInputChange('equipment', 'sprinkler', e.target.value)}
            >
              <option value="">スプリンクラー</option>
              <option value="異常なし">異常なし</option>
              <option value="異常あり">異常あり</option>
            </select>
            <select
              value={entry.equipment.drainSystem}
              onChange={(e) => handleInputChange('equipment', 'drainSystem', e.target.value)}
            >
              <option value="">ドレンシステム</option>
              <option value="異常なし">異常なし</option>
              <option value="異常あり">異常あり</option>
            </select>
            <select
              value={entry.equipment.cartPath}
              onChange={(e) => handleInputChange('equipment', 'cartPath', e.target.value)}
            >
              <option value="">カート道</option>
              <option value="異常なし">異常なし</option>
              <option value="異常あり">異常あり</option>
            </select>
            <textarea
              placeholder="備考"
              value={entry.equipment.notes}
              onChange={(e) => handleInputChange('equipment', 'notes', e.target.value)}
            ></textarea>
          </div>

          <div>
            <h3>スタッフの作業記録</h3>
            <input
              type="text"
              placeholder="スタッフの名前"
              value={entry.staff.name}
              onChange={(e) => handleInputChange('staff', 'name', e.target.value)}
            />
            <input
              type="text"
              placeholder="作業内容"
              value={entry.staff.task}
              onChange={(e) => handleInputChange('staff', 'task', e.target.value)}
            />
            <textarea
              placeholder="備考"
              value={entry.staff.notes}
              onChange={(e) => handleInputChange('staff', 'notes', e.target.value)}
            ></textarea>
          </div>

          <div>
            <h3>特殊な状況や異常</h3>
            <textarea
              placeholder="特殊な状況や異常"
              value={entry.special.incidents}
              onChange={(e) => handleInputChange('special', 'incidents', e.target.value)}
            ></textarea>
          </div>

          <button onClick={saveJournalEntry}>保存</button>
        </div>
      )}
    </div>
  );
};

export default Journal;

