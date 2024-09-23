import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./About.css";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <div className="about" data-aos={isMobile ? "fade-up" : "fade-up"}>
      <Helmet>
    <title>Excellence in Education | Manjampatty</title>
    <meta name="description" content="Discover St. Antony's Higher Secondary School in Manjampatty, where we provide quality education, holistic development, and a supportive learning environment for students. Enroll now!" />
    <meta name="keywords" content="St. Antony's Higher Secondary School, Manjampatty, quality education, holistic development, student enrollment, extracurricular activities, school facilities, quality education in Manjampatty, school with hostel facilities in Tamil Nadu, top school in Manjampatty, best higher secondary school in Tamil Nadu" />
    <meta name="author" content="St. Antony's Higher Secondary School" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="UTF-8" />
    <meta property="og:title" content="St. Antony's Higher Secondary School - Excellence in Education" />
    <meta property="og:description" content="Providing quality education and holistic development in Manjampatty." />
    <meta property="og:image" content="https://stantonyshssmanj.com/btlogo.webp" />
    <meta property="og:url" content="https://stantonyshssmanj.com" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="St. Antony's Higher Secondary School" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="St. Antony's Higher Secondary School" />
    <meta name="twitter:description" content="Quality education and holistic development for students in Manjampatty." />
    <meta name="twitter:image" content="https://stantonyshssmanj.com/btlogo.webp" />
    <meta name="twitter:site" content="@yourtwitterhandle" />

    <meta name="theme-color" content="#317EFB" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="google-site-verification" content="PfgVeXPYntYcZVpdhvfEpF58Blt-T0MQze0dw_TaDGs" />

    <link rel="apple-touch-icon" href="https://stantonyshssmanj.com/apple-touch-icon.png" />
    <link rel="alternate" hreflang="en" href="https://stantonyshssmanj.com" />
    <link rel="alternate" hreflang="ta" href="https://stantonyshssmanj.com/ta" />
</Helmet>
        <h1>About</h1>
      </div>
      <div className="abt-2" data-aos={isMobile ? "fade-up" : "fade-up"}>
        <h3>
          St. Antony's Higher Secondary School in Manjamapatty is a reputable
          institution known for its strong academic program and holistic
          approach to education. It features modern facilities, including
          advanced labs and a comprehensive library. The dedicated faculty
          focuses on both academic and personal development, offering a range of
          extracurricular activities to foster well-rounded growth. The school
          aims to prepare students for future challenges while emphasizing
          values and community involvement.
        </h3>
      </div>
      <div className="abt-3">
        <div>
          <div data-aos="fade-up">
            <h2>
              The Journey of Manapparai School: A Legacy of Growth and
              Transformation
            </h2>
            <p>
              Founding and Early Development (1941-1961) <br /> Fr. Arulanandan,
              the parish priest of Manapparai from 1940 to 1958, <br />
              established a primary school at Manjampatty on June 13, 1941,{" "}
              <br /> with an initial enrollment of 51 boys and girls. <br /> The
              school grew steadily and eventually reached a student strength of
              525. <br />
            </p>
          </div>
          <div data-aos="fade-up">
            <h2>Montfort Brothers Take Over (1961-1975)</h2>
            <p>
              The school was handed over to the Montfort Brothers of St.
              Gabriel, <br /> a dedicated congregation known for their commitment
              to education. <br /> On June 9, 1961, the Montfort Brothers
              upgraded the school to a middle school. ​<br />
            </p>
          </div>
          <div data-aos="fade-up">
            <h2>Expansion and Upgradation (1975-1990)</h2>
            <p>
              In 1975, the primary school campus area was acquired with future
              development in mind. <br /> This effort culminated in the school's
              upgrade to a high school on July 12, 1976. <br /> However, the
              high school could not immediately relocate due to the lack of
              buildings and facilities.
            </p>
          </div>
          <div data-aos="fade-up">
            <h2>Relocation and Further Upgradation (1990-1999)</h2>
            <p>
              Under the leadership of Bro. Xavier Montfort, then Headmaster and
              Correspondent, <br /> a new building was constructed, allowing the
              high school to move to its present campus in 1990. <br /> On June
              30, 1999, the school was further upgraded to a Higher Secondary
              School with self-financed management by Bro. Soosairaj, <br /> who
              also oversaw the construction of new buildings and lab facilities.
            </p>
          </div>
          <div data-aos="fade-up">
            <h2>Orphanage and Hostel Developments (2016-2018)</h2>
            <p>
              The school had an orphanage attached to its campus until 2016,
              providing significant support to students from poor backgrounds.
              Due to regulatory challenges, the orphanage was converted into a
              minimum-paid hostel in 2018.
            </p>
          </div>
          <div data-aos="fade-up">
            <h2>
              Introduction of English Medium and Current Leadership
              (2012-Present)
            </h2>
            <p>
              In 2012, an English medium parallel stream was introduced in
              response to parental demand. <br />
              The school continued to grow under the able administration of
              Bro. Thiruthuvan, Bro. Antony R., Bro. Antony A., and Bro. Joseph
              Sahayam. <br /> As of 2019-2020, Bro. Joseph Thomas took charge as
              Headmaster and Correspondent, continuing the Montfort Brothers'
              mission with great dedication and zeal. <br />
            </p>
          </div>
        </div>
        <div>
          <div data-aos={isMobile ? "fade-up" : "fade-left"}>
            <img src="/monfort-founder.webp" alt="Montfort Founder" />
          </div>
          <div data-aos={isMobile ? "fade-up" : "fade-left"}>
            <img src="/abt2.webp" alt="About Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
