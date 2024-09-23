import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./School.css";

const Hostel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <>
      <div>
        <video className="school-video" autoPlay loop muted>
          <source src="/hostel.mp4" type="video/mp4" />
          Your browser does not support this video
        </video>
      </div>
      <div className="school-infra">
        <div className="school-infra2" data-aos="fade-up">
          <img src="/htl-1.webp" alt="Hostel Image 1" loading="lazy" />
          <img src="/htl-2.webp" alt="Hostel Image 2" loading="lazy" />
          <img src="/htl-3.webp" alt="Hostel Image 3" loading="lazy" />
        </div>
        <div className="school-infra2" data-aos="fade-up" data-aos-delay="100">
          <img src="/htl-4.webp" alt="Hostel Image 4" loading="lazy" />
          <img src="/htl-5.webp" alt="Hostel Image 5" loading="lazy" />
          <img src="/htl-6.webp" alt="Hostel Image 6" loading="lazy" />
        </div>
        <div className="school-infra2" data-aos="fade-up" data-aos-delay="200">
          <img src="/htl-7.webp" alt="Hostel Image 7" loading="lazy" />
        </div>
      </div>
      <div className="infra-details" data-aos="fade-right">
        <h3>
          The hostel at St. Antony's Higher Secondary School provides a
          comfortable and secure living environment for students. It offers
          well-furnished rooms, study areas, and common spaces for relaxation.
          The hostel ensures a disciplined routine, with facilities such as a
          dining hall offering nutritious meals, 24/7 security, and access to
          essential amenities like laundry and medical care. The environment
          promotes a balance between academics and personal development,
          creating a supportive community for students living away from home.
        </h3>
      </div>
      <div className="infra-flex" data-aos="fade-left">
        <div>
          <img src="/htl-1.webp" alt="Hostel Food" loading="lazy" />
        </div>
        <div className="infra-flex2">
          <h2>HOSTEL FOOD</h2>
          <br />
          <p>
            At St. Antony's Higher Secondary School, our hostel provides freshly
            prepared, nutritious, and well-balanced meals to support the health
            and well-being of our students. The menu is carefully curated to
            offer a variety of dishes, including traditional meals, fresh
            fruits, and vegetables. We ensure that all food is prepared in a
            hygienic kitchen, with strict adherence to safety standards. Special
            dietary needs are accommodated, and students can enjoy their meals
            in a communal dining hall, fostering a sense of togetherness and
            community.
          </p>
        </div>
      </div>
      <div className="infra-flex" data-aos="fade-right">
        <div className="infra-flex2">
          <h2>HOSTEL BEDROOM</h2>
          <br />
          <p>
            The hostel bedrooms at St. Antony's Higher Secondary School are
            designed to provide a comfortable and secure living space for
            students. Each room is spacious, well-ventilated, and furnished with
            comfortable beds, study desks, and personal storage areas. With a
            focus on cleanliness and privacy, our hostel bedrooms ensure that
            students have a peaceful environment to rest, study, and recharge-hostel,
            making it their home away from home.
          </p>
        </div>
        <div>
          <img src="/htl-bedroom.webp" alt="Hostel Bedroom" loading="lazy" />
        </div>
      </div>
    </>
  );
};

export default Hostel;
