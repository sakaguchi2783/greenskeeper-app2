// src/pages/Home.js
import React, { useState } from 'react';
import './Home.css';
import tgImage from '../assets/TG.png';

const Home = () => {
  const messages = [
    'あなたがいるからゴルフ場が運営できる',
    'あなたがいるからゴルファー達がプレーできる',
    'あなたがいるからゴルフ場がゴルフ場であり続ける',
    'TGアルバはあなたをいつも見ています 応援とサポートを続けて参ります'
  ];
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  };

  return (
    <div className="home-container">
      <img src={tgImage} alt="TG ALBA" className="home-image" />
      <button onClick={handleClick} className="home-button">お仕事に疲れたキーパー様はここをタップ</button>
      {message && <p className="home-message">{message}</p>}
    </div>
  );
};

export default Home;
