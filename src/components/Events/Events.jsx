import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners"; // Import ScaleLoader from react-spinners
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Events.css";

const Events = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [isMobile, setIsMobile] = useState(false); // State to track if device is mobile

  useEffect(() => {
    // Function to check if the device is mobile based on window width
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Set true if screen width is <= 768px (mobile)
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize to update mobile state dynamically
    window.addEventListener("resize", checkIsMobile);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
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
      <Helmet>
          <title>Events</title>
          <meta
            name="description"
            content="Discover St. Antony's Higher Secondary School in Manjampatty, where we provide quality education, holistic development, and a supportive learning environment for students. Enroll now!"
          />
          <meta
            name="keywords"
            content="St. Antony's Higher Secondary School, Manjampatty, quality education, holistic development, student enrollment, extracurricular activities, school facilities, quality education in Manjampatty, school with hostel facilities in Tamil Nadu, top school in Manjampatty, best higher secondary school in Tamil Nadu"
          />
          <meta name="author" content="St. Antony's Higher Secondary School" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charset="UTF-8" />
          <meta
            property="og:title"
            content="St. Antony's Higher Secondary School - Excellence in Education"
          />
          <meta
            property="og:description"
            content="Providing quality education and holistic development in Manjampatty."
          />
          <meta
            property="og:image"
            content="https://stantonyshssmanj.com/btlogo.webp"
          />
          <meta property="og:url" content="https://stantonyshssmanj.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="St. Antony's Higher Secondary School"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="St. Antony's Higher Secondary School"
          />
          <meta
            name="twitter:description"
            content="Quality education and holistic development for students in Manjampatty."
          />
          <meta
            name="twitter:image"
            content="https://stantonyshssmanj.com/btlogo.webp"
          />
          <meta name="twitter:site" content="@yourtwitterhandle" />

          <meta name="theme-color" content="#317EFB" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />
          <meta
            name="google-site-verification"
            content="PfgVeXPYntYcZVpdhvfEpF58Blt-T0MQze0dw_TaDGs"
          />

          <link
            rel="apple-touch-icon"
            href="https://stantonyshssmanj.com/apple-touch-icon.png"
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://stantonyshssmanj.com"
          />
          <link
            rel="alternate"
            hreflang="ta"
            href="https://stantonyshssmanj.com/ta"
          />
        </Helmet>
        <h1 data-aos={isMobile ? "fade-down" : "fade-left"}>Events</h1>
      </div>
      <div className="events2">
        <h3 data-aos={isMobile ? "fade-down" : "fade-left"}>
          St. Antony's Higher Secondary School hosts a variety of key events
          throughout the year. Annual Day features student performances, awards,
          and a concluding speech, showcasing academic and artistic
          achievements. Sports Day includes track and field events, team sports,
          and fun races, celebrating athletic skills and team spirit. Throughout
          the year, student activities encompass academic competitions, club
          participation, skill-building workshops, community service, and
          educational excursions, all aimed at promoting holistic development
          and community engagement.
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
              <div data-aos={isMobile ? "fade-up" : "fade-right"}>
                <img src={event.img} alt={event.name} loading="lazy" />
              </div>
              <div className="events-details" data-aos={isMobile ? "fade-up" : "fade-left"}>
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
