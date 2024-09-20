import React, { useState } from 'react';
import './Infrastructure.css';
import School from './School';
import Hostel from './Hostel';

const Infrastructure = () => {
  const [activeTab, setActiveTab] = useState('school'); // Default tab is 'school'

  return (
    <>
      <div className="infrastructure">
        <h2>INFRASTRUCTURE</h2>
      </div>
      <br />
      <br />
      <div className="tab-section">
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

      <div className="tab-content">
        {activeTab === 'school' && <School />}
        {activeTab === 'hostel' && <Hostel />}
      </div>
    </>
  );
};

export default Infrastructure;
