import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners"; // Import ScaleLoader from react-spinners
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Events.css";

const Events = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration

    const fetchData = async () => {
      try {
        const response = await fetch("/events.json");
        const eventData = await response.json();
        setData(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="events">
        <h2 data-aos="fade-up">Events</h2>
      </div>
      <div className="events2">
        <h3 data-aos="fade-left">
          St. Antony's Higher Secondary School hosts a variety of key events
          throughout the year. Annual Day features student performances, awards,
          and a concluding speech, showcasing academic and artistic
          achievements. Sports Day includes track and field events, team sports,
          and fun races, celebrating athletic skills and team spirit.
          Throughout the year, student activities encompass academic
          competitions, club participation, skill-building workshops, community
          service, and educational excursions, all aimed at promoting holistic
          development and community engagement.
        </h3>
      </div>

      {loading ? (
        <div className="spinner-container" data-aos="fade-in">
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
        data.length > 0 &&
        data.map((event, index) => (
          <div className="event-main" key={index} data-aos="fade-up">
            <div className="events-list">
              <div data-aos="fade-right">
                <img src={event.img} alt={event.name} loading="lazy" />
              </div>
              <div className="events-details" data-aos="fade-left">
                <h2>{event.name}</h2>
                <p>{event.desc}</p>
                <Link to={event.path} className="event-link">
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Events;
