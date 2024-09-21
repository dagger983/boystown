import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <>
      <footer className="footer" data-aos="fade-up">
        <div className="footer-section logo" data-aos="fade-right">
          <img src="/btlogo.webp" alt="School Logo" className="footer-logo" />
        </div>

        <div className="footer-section contact-info" data-aos="fade-up">
          <p>Manjampatty, Manapparai, Tiruchirappalli - 621307</p>
          <p>
            <a href="tel:+919487739948">+91 9487739948</a>
          </p>
          <p>
            <a href="mailto:aidhss20440062manj@gmail.com">
              aidhss20440062manj@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-section contact-form" data-aos="fade-left">
          <form action="#" method="POST">
            <div className="form-group">
              <input
                style={{
                  background: "none",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottomColor: "white",
                  borderRadius: "0px",
                }}
                type="text"
                name="firstname"
                placeholder="First name"
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                required
                style={{
                  background: "none",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottomColor: "white",
                  borderRadius: "0px",
                }}
              />
            </div>
            <div className="form-group">
              <input
                style={{
                  background: "none",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottomColor: "white",
                  borderRadius: "0px",
                }}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                style={{
                  background: "none",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottomColor: "white",
                  borderRadius: "0px",
                }}
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Leave us a message..."
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="footer-section social-links" data-aos="fade-up">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
      </footer>
      <div className="brand-watermark" >
        <p>&copy; {currentYear} SAHSS Manjampatty. Designed and Developed by <a href="https://rategle-tech.web.app" style={{textDecoration:"underline"}}>Rategle Technologies</a>.</p>
      </div>
    </>
  );
};

export default Footer;
