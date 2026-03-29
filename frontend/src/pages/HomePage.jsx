import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <h1>แผนกฝึกอบรม Siam Autobacs</h1>
        <p>ยินดีต้อนรับสู่ศูนย์ฝึกอบรมของเรา</p>
        <div className="content-section">
          <h2>เกี่ยวกับเรา</h2>
          <p>เราเป็นแผนกฝึกอบรมของบริษัท Siam Autobacs ที่มีบุคลากรมืออาชีพ</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;