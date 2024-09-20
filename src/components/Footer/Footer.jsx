import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="footer-section logo">
          <img src="/btlogo.webp" alt="School Logo" className="footer-logo" />
        </div>

        <div className="footer-section contact-info">
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

        <div className="footer-section contact-form">
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

        <div className="footer-section social-links">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
      </footer>
      <div className="brand-watermark">
      <p>&copy;  {currentYear} SAHSS Manjampatty. Designed and Developed by <a href="https://rategle-tech.web.app" style={{textDecoration:"underline"}}>Rategle Technologies</a>.</p>      </div>
    </>
  );
};

export default Footer;
