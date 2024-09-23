import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { ScaleLoader } from "react-spinners"; // Import the ScaleLoader
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./Faculty.css";

const FacultyMember = ({ name, department, image }) => (
  <div className="faculty-member" data-aos="fade-up">
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

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS

    const fetchData = async () => {
      try {
        const regularResponse = await fetch("https://appsail-50022339494.development.catalystappsail.in/regularStaff");
        const regularData = await regularResponse.json();
        setMembers(regularData);

        const managementResponse = await fetch("https://appsail-50022339494.development.catalystappsail.in/managementStaff");
        const managementData = await managementResponse.json();
        setMembers2(managementData);

        const officeResponse = await fetch("https://appsail-50022339494.development.catalystappsail.in/OfficeStaff");
        const officeData = await officeResponse.json();
        setMembers3(officeData);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
      } finally {
        setLoading(false); // Stop loading once all data is fetched
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="faculty-1" data-aos="fade-up">
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is a description of my page" />
      </Helmet>
        <h2>FACULTY</h2>
      </div>
      <div className="faculty-2" data-aos="fade-left">
        <h3>
          At St Antony's Higher Secondary School, the faculty is a dedicated
          team of educators committed to fostering academic excellence and
          personal growth. Each teacher brings a wealth of knowledge and a
          passion for their subject, creating a stimulating and supportive
          learning environment. The staff includes experienced professionals who
          employ innovative teaching methods to engage students and cater to
          diverse learning needs. Their commitment extends beyond the classroom,
          as they actively participate in extracurricular activities, mentoring
          programs, and community service, ensuring a well-rounded education for
          all students.
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
          <h4 className="facultyType" data-aos="fade-up">Regular Staff</h4>
          <div className="faculty-grid">
            {members.map((member, index) => (
              <FacultyMember 
                key={index} 
                name={member.name} 
                department={member.department} 
                image={member.image} 
              />
            ))}
          </div>

          <h4 className="facultyType" data-aos="fade-up">Management Staff</h4>
          <div className="faculty-grid">
            {members2.map((member, index) => (
              <FacultyMember 
                key={index} 
                name={member.name} 
                department={member.department} 
                image={member.image} 
              />
            ))}
          </div>

          <h4 className="facultyType" data-aos="fade-up">Office Staff</h4>
          <div className="faculty-grid">       
            {members3.map((member, index) => (
              <FacultyMember 
                key={index} 
                name={member.name} 
                department={member.department} 
                image={member.image} 
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Faculty;
