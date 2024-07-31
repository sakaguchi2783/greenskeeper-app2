// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>ホーム</h1>
      <p>疲れたキーパー様はここをタップ</p>
      <button onClick={() => alert("あなたがいるからゴルフ場が運営できる")}>
        応援メッセージ
      </button>
    </div>
  );
};

export default Home;
