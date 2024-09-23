import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./Contact.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <>
      <div className="contactContainer-main" data-aos="fade-up">
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is a description of my page" />
      </Helmet>
        <div className="contactContainer">
          <div>
            <h2>
              St. Antony's Higher Secondary School welcomes applications from
              students of all backgrounds. Our admissions process is designed to
              identify students who will thrive in our challenging academic
              environment.
            </h2>
            <div>
              <h3>Contact Us</h3>
              <ul>
                <li>
                  For more information or to schedule a visit, please contact us
                  at:
                </li>
                <li>Address: Manjampatty, Manapparai, Tiruchirappalli-621307</li>
                <li>Phone: 9487739948</li>
                <li>Email: aidhss20440062manj@gmail.com</li>
                <li>Office Hours: 9.00am To 4.00pm</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contactContainer2">
          <div className="contactContainer2-main">
            <div data-aos="fade-right">
              <img src="/kolanthai.webp" alt="Contact" />
            </div>
            <div data-aos="fade-left">
              <form   action="https://formspree.io/f/xeojbklq" method="post">
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
