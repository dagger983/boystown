import React, { useState, useEffect } from 'react';
import './Infrastructure.css';
import School from './School';
import Hostel from './Hostel';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Infrastructure = () => {
  const [activeTab, setActiveTab] = useState('school'); // Default tab is 'school'

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <>
      <div className="infrastructure" data-aos="fade-up">
        <h2>INFRASTRUCTURE</h2>
      </div>
      <br />
      <br />
      <div className="tab-section" data-aos="fade-up">
        <button
          className={`tab-button ${activeTab === 'school' ? 'active' : ''}`}
          onClick={() => setActiveTab('school')}
        >
          School
        </button>
        <button
          className={`tab-button ${activeTab === 'hostel' ? 'active' : ''}`}
          onClick={() => setActiveTab('hostel')}
        >
          Hostel
        </button>
      </div>

      <div className="tab-content" data-aos="fade-up">
        {activeTab === 'school' && <School />}
        {activeTab === 'hostel' && <Hostel />}
      </div>
    </>
  );
};

export default Infrastructure;
