import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
        <Helmet>
          <title>Home</title>
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
          rigor with the development of physical, emotional, and social
          skills...
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
