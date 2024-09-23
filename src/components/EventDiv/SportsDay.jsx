import React, { useState, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners'; // Import ScaleLoader
import "./eventDiv.css";

const SportsDay = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [eventData, setEventData] = useState([]);
  const [eventDetails, setEventDetails] = useState(null);
  const [years, setYears] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchEventData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch('https://appsail-50022339494.development.catalystappsail.in/mainEvent'); // Update this path
        const data = await response.json();

        // Filter the data to include only events with the category "sportsday"
        const sportsDayEvents = data.filter(event => event.category === 'sportsday');
        setEventData(sportsDayEvents);

        // Extract unique years from the filtered data
        const uniqueYears = [...new Set(sportsDayEvents.map(event => event.year))];
        setYears(uniqueYears);
      } catch (error) {
        console.error('Error fetching event data:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchEventData();
  }, []);

  const handleYearChange = (e) => {
    const selected = e.target.value;
    setSelectedYear(selected);

    // Find the event details for the selected year and category "sportsday"
    const details = eventData.find((event) => event.year.toString() === selected);
    setEventDetails(details);
  };

  return (
    <div className="container">
      <div className="year-selection">
        <h2 className="title">Select the year</h2>
        <select value={selectedYear} onChange={handleYearChange} className="select-dropdown">
          <option value="" disabled>Select year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

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
          </div>
        ) : (
          eventDetails ? (
            <div className="details-box">
              <h3 className="event-title">{eventDetails["event_name"]} - {eventDetails.year}</h3>
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
            <p className="no-selection">Please select a year to see the event details.</p>
          )
        )}
      </div>
    </div>
  );
};

export default SportsDay;
