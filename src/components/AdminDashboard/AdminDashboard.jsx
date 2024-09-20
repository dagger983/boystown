import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ManagementStaff from './ManagementStaff';
import RegularStaff from './RegularStaff'; // Import RegularStaff
import OfficeStaff from './OfficeStaff'; // Import OfficeStaff
import MainEvent from './MainEvent';
import SubEvent from './SubEvent';
import Hsc from './Hsc';
import Sslc from './Sslc';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [managementStaff, setManagementStaff] = useState([]);
  const [regularStaff, setRegularStaff] = useState([]); // State for Regular Staff
  const [officeStaff, setOfficeStaff] = useState([]); // State for Office Staff
  const [mainEvent, setMainEvent] = useState([]);
  const [subEvent, setSubEvent] = useState([]);
  const [hsc, setHsc] = useState([]);
  const [sslc, setSslc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [staffRes, regularStaffRes, officeStaffRes, mainEventRes, subEventRes, hscRes, sslcRes] = await Promise.all([
        axios.get('https://appsail-50022339494.development.catalystappsail.in/managementStaff'),
        axios.get('https://appsail-50022339494.development.catalystappsail.in/regularStaff'), // Fetch Regular Staff
        axios.get('https://appsail-50022339494.development.catalystappsail.in/officeStaff'), // Fetch Office Staff
        axios.get('https://appsail-50022339494.development.catalystappsail.in/mainEvent'),
        axios.get('https://appsail-50022339494.development.catalystappsail.in/subEvent'),
        axios.get('https://appsail-50022339494.development.catalystappsail.in/hsc'),
        axios.get('https://appsail-50022339494.development.catalystappsail.in/sslc'),
      ]);

      setManagementStaff(staffRes.data);
      setRegularStaff(regularStaffRes.data); // Set Regular Staff data
      setOfficeStaff(officeStaffRes.data); // Set Office Staff data
      setMainEvent(mainEventRes.data);
      setSubEvent(subEventRes.data);
      setHsc(hscRes.data);
      setSslc(sslcRes.data);
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <RegularStaff regularStaff={regularStaff} setRegularStaff={setRegularStaff} /> 
      <ManagementStaff managementStaff={managementStaff} setManagementStaff={setManagementStaff} />
      <OfficeStaff officeStaff={officeStaff} setOfficeStaff={setOfficeStaff} /> {/* Add Office Staff component */}
      <MainEvent mainEvent={mainEvent} setMainEvent={setMainEvent} />
      <SubEvent subEvent={subEvent} setSubEvent={setSubEvent} />
      <Hsc hsc={hsc} setHsc={setHsc} />
      <Sslc sslc={sslc} setSslc={setSslc} />
    </div>
  );
};

export default AdminDashboard;
