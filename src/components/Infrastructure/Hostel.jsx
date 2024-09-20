import React from "react";
import "./School.css";
const Hostel = () => {
  return (
    <>
      <div>
        <video className="school-video" autoPlay loop muted>
          <source src="/hostel.mp4" type="video/mp4" />
          Your browser does not support this video
        </video>
      </div>
      <div className="school-infra">
        <div className="school-infra2">
          <img src="/htl-1.webp" alt="" />
          <img src="/htl-2.webp" alt="" />
          <img src="/htl-3.webp" alt="" />
        </div>
        <div className="school-infra2">
          <img src="/htl-4.webp" alt="" />
          <img src="/htl-5.webp" alt="" />
          <img src="/htl-6.webp" alt="" />
        </div>
        <div className="school-infra2">
          <img src="/htl-7.webp" alt="" />
        </div>
      </div>
      <div className="infra-details">
        <h3>
          The hostel at St. Antony's Higher Secondary School provides a
          comfortable and secure living environment for students. It offers
          well-furnished rooms, study areas, and common spaces for relaxation.
          The hostel ensures a disciplined routine, with facilities such as a
          dining hall offering nutritious meals, 24/7 security, and access to
          essential amenities like laundry and medical care. The environment
          promotes a balance between academics and personal development,
          creating a supportive community for students living away from home
        </h3>
      </div>
      <div className="infra-flex">
        <div>
          <img src="/htl-1.webp" alt="" />
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
      <div className="infra-flex">
        <div className="infra-flex2">
          <h2>HOSTEL BEDROOM</h2>
          <br />
          <p>
            The hostel bedrooms at St. Antony's Higher Secondary School are
            designed to provide a comfortable and secure living space for
            students. Each room is spacious, well-ventilated, and furnished with
            comfortable beds, study desks, and personal storage areas. With a
            focus on cleanliness and privacy, our hostel bedrooms ensure that
            students have a peaceful environment to rest, study, and
            recharge-hostel, making it their home away from home.
          </p>
        </div>
        <div>
          <img src="/htl-bedroom.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hostel;
