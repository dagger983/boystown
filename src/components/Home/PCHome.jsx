import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./PCHome.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const PCHome = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const checkViewportWidth = () => {
    if (window.innerWidth <= 768) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    checkViewportWidth();
    window.addEventListener("resize", checkViewportWidth);

    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });

    return () => {
      window.removeEventListener("resize", checkViewportWidth);
    };
  }, []);

  return (
    <>
      <div className="home" data-aos="fade-up">
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
        
        <div className="home2">
          <h1>
            Welcome to <br /> St. Antony's Higher Secondary School
          </h1>
          <p>
            At St. Antony's Higher Secondary School, we are committed to
            providing {isMobileView ? "" : <br />}
            an exceptional educational experience that nurtures young minds,{" "}
            {isMobileView ? "" : <br />}
            cultivates academic excellence, and shapes future leaders.{" "}
            {isMobileView ? "" : <br />}
          </p>
          <p>
            Our school, steeped in tradition and focused on innovation,{" "}
            {isMobileView ? "" : <br />}
            is a beacon of learning and growth.
          </p>
        </div>
        <div>
          <img src="/monfort.webp" alt="" />
        </div>
      </div>

      <div className="home-main" data-aos="fade-up">
        <p>THEME OF THE YEAR</p>
        <h2>"Empowering Education Through Metacognition"</h2>
      </div>

      <div className="home-main2" data-aos="fade-right">
        <div>
          <h2>Our Founder - Louis Marie Grignion de Montfort</h2>
          <div className="home-main3">
            <img src="/monfort-founder.webp" alt="" />
            <div></div>
            <p className="home-para">
              Louis de Montfort, the esteemed founder of St. Antony’s Higher{" "}
              {isMobileView ? "" : <br />} Secondary School, was a visionary
              educator whose profound {isMobileView ? "" : <br />}
              commitment to holistic education laid the foundation for the{" "}
              {isMobileView ? "" : <br />}
              institution’s enduring success. Guided by his deep belief in the{" "}
              {isMobileView ? "" : <br />}
              transformative power of learning, de Montfort established the{" "}
              {isMobileView ? "" : <br />}
              school with the aim of nurturing both the intellect and character{" "}
              {isMobileView ? "" : <br />}
              of students. His innovative approach and unwavering dedication to{" "}
              {isMobileView ? "" : <br />}
              academic and moral excellence continue to inspire the school's{" "}
              {isMobileView ? "" : <br />}
              mission, shaping an environment where students are encouraged to{" "}
              {isMobileView ? "" : <br />}
              excel and grow. Through his legacy, St. Antony’s remains a beacon{" "}
              {isMobileView ? "" : <br />}
              of educational excellence and personal development, honoring his{" "}
              {isMobileView ? "" : <br />}
              vision with every stride toward a brighter future.
            </p>
          </div>
        </div>
      </div>

      <div className="home-main4" data-aos="fade-left">
        <div>
          <h2>Our Head Master</h2>
          <p>
            Bro. Joseph Thomas, the Headmaster of St. Antony’s Higher Secondary{" "}
            {isMobileView ? "" : <br />} School, brings a wealth of experience
            and a visionary approach to {isMobileView ? "" : <br />} his role.
            With a profound commitment to fostering educational{" "}
            {isMobileView ? "" : <br />}
            excellence and personal development, Bro. Thomas is dedicated to{" "}
            {isMobileView ? "" : <br />} creating an environment where students
            can thrive. His approachable {isMobileView ? "" : <br />} leadership
            style and innovative mindset inspire both students and{" "}
            {isMobileView ? "" : <br />}
            staff, driving the school toward its goals of academic achievement{" "}
            {isMobileView ? "" : <br />} and wholistic growth. Under his
            guidance, St. Antony’s continues to {isMobileView ? "" : <br />}
            uphold its reputation for excellence, nurturing the potential of{" "}
            {isMobileView ? "" : <br />} every student and preparing them for
            future success.
          </p>
        </div>
        <div>
          <img src="/hmbrother.webp" alt="" />
        </div>
      </div>

      <div className="home-main5" data-aos="zoom-in">
        <div>
          <img src="/mission.gif" alt="" />
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>Our Mission</h2>
          <p>
            Wholistic Education: To provide an education that balances academic{" "}
            <br />
            rigor with the development of physical, emotional, and social
            skills. <br />
            <br />
            Moral Integrity: To instill a strong moral compass in our students,{" "}
            <br />
            guiding them to make ethical decisions throughout their lives.{" "}
            <br />
            <br />
            Community Engagement: To encourage students to engage with and{" "}
            <br />
            contribute to their communities, fostering a sense of social <br />
            responsibility.
            <br />
            <br />
            Innovation: To embrace and integrate modern teaching methods and{" "}
            <br />
            technologies that prepare students for the future.
            <br />
          </p>
        </div>
      </div>

      <div className="home-main6" data-aos="fade-up">
        <div>
          <h2>Our Vision</h2>
          <p>
            St. Antony's Higher Secondary School envisions a world where{" "}
            {isMobileView ? "" : <br />} education transcends mere academic
            achievement. We aim to mold {isMobileView ? "" : <br />} individuals
            who are not only knowledgeable but also compassionate,{" "}
            {isMobileView ? "" : <br />}
            ethical, and equipped to face the challenges of the modern world.{" "}
            {isMobileView ? "" : <br />} Our vision is to create an inclusive
            learning environment that {isMobileView ? "" : <br />} fosters
            creativity, critical thinking, and lifelong learning.
          </p>
        </div>
        <div>
          <img src="/vision.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default PCHome;
