import React, { useState, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners'; // Import ScaleLoader
import "./eventDiv.css";

const CAC = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [eventData, setEventData] = useState([]);
  const [eventDetails, setEventDetails] = useState(null);
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchEventData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch('https://appsail-50022339494.development.catalystappsail.in/subEvent'); // Update this path
        const data = await response.json();
        
        // Filter the data to include only "club-activities" events
        const clubActivities = data.filter(event => event.category === 'club-activities');
        setEventData(clubActivities);
        
        // Extract unique years from the filtered data
        const uniqueYears = [...new Set(clubActivities.map(event => event.year))];
        setYears(uniqueYears);
      } catch (error) {
        console.error('Error fetching event data:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchEventData();
  }, []);

  useEffect(() => {
    if (selectedYear) {
      const uniqueMonths = [...new Set(eventData
        .filter(event => event.year.toString() === selectedYear)
        .map(event => event.month))];
      setMonths(uniqueMonths);
    } else {
      setMonths([]);
    }
  }, [selectedYear, eventData]);

  const handleYearChange = (e) => {
    const selected = e.target.value;
    setSelectedYear(selected);
    setSelectedMonth(""); // Reset month when year changes
    setEventDetails(null);
  };

  const handleMonthChange = (e) => {
    const selected = e.target.value;
    setSelectedMonth(selected);
    const details = eventData.find((event) => 
      event.year.toString() === selectedYear && event.month === selected
    );
    setEventDetails(details);
  };

  return (
    <div className="container">
      <div className="year-selection">
        <h2 className="title">Select the year</h2>
        <select value={selectedYear} onChange={handleYearChange} className="select-dropdown">
          <option value="" disabled>Select year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <br />
      {selectedYear && (
        <div className="month-selection">
          <h2 className="title">Select the month</h2>
          <select value={selectedMonth} onChange={handleMonthChange} className="select-dropdown">
            <option value="" disabled>Select month</option>
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      )}

      <div className="event-details">
        {loading ? (
          <div className="spinner-container">
            <ScaleLoader
              height={50}
              width={5}
              radius={2}
              margin={2}
              color={"#22355c"}
              loading={loading}
            />
            <p>Loading event data...</p>
          </div>
        ) : (
          eventDetails ? (
            <div className="details-box">
              <h3 className="event-title">{eventDetails["event_name"]} - {eventDetails.month} {eventDetails.year}</h3>
              <p className="event-description">{eventDetails.description}</p>
              <div className="event-images">
                {Object.keys(eventDetails).map((key, index) => {
                  if (key.startsWith("img") && eventDetails[key]) {
                    return <img key={index} src={eventDetails[key]} alt={`Event ${index + 1}`} className="event-image" />;
                  }
                  return null;
                })}
              </div>
            </div>
          ) : (
            <p className="no-selection">Please select a year and month to see the event details.</p>
          )
        )}
      </div>
    </div>
  );
};

export default CAC;
