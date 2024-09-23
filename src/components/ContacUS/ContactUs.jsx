import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./Contact.css";

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Mobile state

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update mobile state based on window size
    };

    window.addEventListener("resize", handleResize); // Add resize event listener

    AOS.init({ duration: 1000 }); // Initialize AOS

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  return (
    <>
      <div className="contactContainer-main" data-aos={isMobile ? "fade-up" : "fade-down"}>
      <Helmet>
          <title>Contact Us</title>
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
        <div className="contactContainer">
          <div data-aos={isMobile ? "fade-up" : "fade-down"}>
            <h2>
              St. Antony's Higher Secondary School welcomes applications from
              students of all backgrounds. Our admissions process is designed to
              identify students who will thrive in our challenging academic
              environment.
            </h2>
            <div>
              <h1>Contact Us</h1>
              <ul>
                <li>
                  For more information or to schedule a visit, please contact us
                  at:
                </li>
                <li>
                  Address: Manjampatty, Manapparai, Tiruchirappalli-621307
                </li>
                <li>Phone: 9487739948</li>
                <li>Email: aidhss20440062manj@gmail.com</li>
                <li>Office Hours: 9.00am To 4.00pm</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contactContainer2">
          <div className="contactContainer2-main">
            <div data-aos={isMobile ? "fade-up" : "fade-right"}>
              <img src="/kolanthai.webp" alt="Contact" />
            </div>
            <div data-aos={isMobile ? "fade-up" : "fade-left"}>
              <form action="https://formspree.io/f/xeojbklq" method="post">
                <h2 style={{ color: "#12274a" }}>Contact Us</h2>
                <br />
                <br />
                <label htmlFor="fname">First Name</label> <br />
                <input type="text" name="fname" required /> <br />
                <label htmlFor="sname">Last Name</label> <br />
                <input type="text" name="sname" required /> <br />
                <label htmlFor="email">Email</label> <br />
                <input type="text" name="email" required /> <br />
                <label htmlFor="message">Message</label> <br />
                <input type="text" name="message" required /> <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
