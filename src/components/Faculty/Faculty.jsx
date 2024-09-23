import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ScaleLoader } from "react-spinners"; // Import the ScaleLoader
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./Faculty.css";

const FacultyMember = ({ name, department, image, aosEffect }) => (
  <div className="faculty-member" data-aos={aosEffect}>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{department}</p>
  </div>
);

const Faculty = () => {
  const [members, setMembers] = useState([]);
  const [members2, setMembers2] = useState([]);
  const [members3, setMembers3] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // State to track if it's mobile view

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animation

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set isMobile to true if window width <= 768px
    };

    // Call handleResize on component mount
    handleResize();

    // Add event listener to update isMobile state on window resize
    window.addEventListener("resize", handleResize);

    const fetchData = async () => {
      try {
        const regularResponse = await fetch(
          "https://appsail-50022339494.development.catalystappsail.in/regularStaff"
        );
        const regularData = await regularResponse.json();
        setMembers(regularData);

        const managementResponse = await fetch(
          "https://appsail-50022339494.development.catalystappsail.in/managementStaff"
        );
        const managementData = await managementResponse.json();
        setMembers2(managementData);

        const officeResponse = await fetch(
          "https://appsail-50022339494.development.catalystappsail.in/OfficeStaff"
        );
        const officeData = await officeResponse.json();
        setMembers3(officeData);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
      } finally {
        setLoading(false); // Stop loading once all data is fetched
      }
    };

    fetchData();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="faculty-1" data-aos="fade-down">
      <Helmet>
          <title>Faculty</title>
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
        <h1>FACULTY</h1>
      </div>
      <div className="faculty-2" data-aos={isMobile ? "fade-up" : "fade-left"}>
        <h3>
          At St Antony's Higher Secondary School, the faculty is a dedicated
          team of educators committed to fostering academic excellence and
          personal growth.
        </h3>
      </div>

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
        <>
          <h4 className="facultyType" data-aos={isMobile ? "fade-up" : "fade-up"}>
            Regular Staff
          </h4>
          <div className="faculty-grid">
            {members.map((member, index) => (
              <FacultyMember
                key={index}
                name={member.name}
                department={member.department}
                image={member.image}
                aosEffect={isMobile ? "fade-up" : "fade-right"}
              />
            ))}
          </div>

          <h4 className="facultyType" data-aos={isMobile ? "fade-up" : "fade-up"}>
            Management Staff
          </h4>
          <div className="faculty-grid">
            {members2.map((member, index) => (
              <FacultyMember
                key={index}
                name={member.name}
                department={member.department}
                image={member.image}
                aosEffect={isMobile ? "fade-up" : "fade-right"}
              />
            ))}
          </div>

          <h4 className="facultyType" data-aos={isMobile ? "fade-up" : "fade-up"}>
            Office Staff
          </h4>
          <div className="faculty-grid">
            {members3.map((member, index) => (
              <FacultyMember
                key={index}
                name={member.name}
                department={member.department}
                image={member.image}
                aosEffect={isMobile ? "fade-up" : "fade-right"}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Faculty;
