import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./MobHome.css";

const MobHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <>
      <div className="mobhome-1" data-aos="fade-up">
        <div>
          <img src="/abt2.webp" alt="" />
        </div>
        <div>
          <h2>
            Welcome to <br />
            St. Antony's Higher Secondary School
          </h2>
          <p>
            At St. Antony's Higher Secondary School, we are committed to
            providing an exceptional educational experience that nurtures young
            minds, cultivates academic excellence, and shapes future leaders.
            <br />
            <br />
            Our school, steeped in tradition and focused on innovation, is a
            beacon of learning and growth.
          </p>
        </div>
      </div>
      
      <div className="mobhome-2" data-aos="fade-right">
        <h3>THEME OF THE YEAR</h3>
        <h2>"Empowering Education Through Metacognition"</h2>
      </div>

      <div className="mobhome-3" data-aos="fade-left">
        <h2>Our Founder - Louis Marie Grignion de Montfort</h2>
        <div>
          <img src="/monfort-founder.webp" alt="" />
        </div>
        <p>
          Louis de Montfort, the esteemed founder of St. Antony’s Higher
          Secondary School, was a visionary educator whose profound commitment
          to holistic education laid the foundation for the institution’s
          enduring success...
        </p>
      </div>

      <div className="mobhome-4" data-aos="fade-up">
        <h2>Our Headmaster</h2>
        <div>
          <img src="/hmbrother.webp" alt="" />
        </div>
        <p>
          Bro. Joseph Thomas, the Headmaster of St. Antony’s Higher Secondary
          School, brings a wealth of experience and a visionary approach to his
          role...
        </p>
      </div>

      <div className="mobhome-5" data-aos="fade-right">
        <h2>Our Mission</h2>
        <div>
          <img src="/mission.gif" alt="" />
        </div>
        <p>
          Wholistic Education: To provide an education that balances academic
          rigor with the development of physical, emotional, and social skills...
        </p>
      </div>

      <div className="mobhome-6" data-aos="fade-left">
        <h2>Our Vision</h2>
        <div>
          <img src="/vision.webp" alt="" />
        </div>
        <p>
          St. Antony's Higher Secondary School envisions a world where education
          transcends mere academic achievement...
        </p>
      </div>
    </>
  );
};

export default MobHome;
