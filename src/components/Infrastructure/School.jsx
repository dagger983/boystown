import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./School.css";

const School = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms (1 second)
  }, []);

  return (
    <>
      <div>
        <video className="school-video" autoPlay loop muted>
          <source src="/bt-welcome.mp4" type="video/mp4" />
          Your browser does not support this video
        </video>
      </div>

      {/* Infrastructure Section */}
      <div className="school-infra" data-aos="fade-up">
        <div className="school-infra2">
          <img src="/scl-1.webp" alt="School Infrastructure 1" loading="lazy" />
          <img src="/scl-2.webp" alt="School Infrastructure 2" loading="lazy" />
          <img src="/scl-3.webp" alt="School Infrastructure 3" loading="lazy" />
        </div>
        <div className="school-infra2" data-aos="fade-up" data-aos-delay="100">
          <img src="/scl-7.JPG" alt="School Infrastructure 7" loading="lazy" />
          <img src="/scl-5.jpg" alt="School Infrastructure 5" loading="lazy" />
          <img src="/scl-6.webp" alt="School Infrastructure 6" loading="lazy" />
        </div>
        <div className="school-infra2" data-aos="fade-up" data-aos-delay="200">
          <img src="/scl-8.webp" alt="School Infrastructure 8" loading="lazy" />
          <img src="/scl-4.JPG" alt="School Infrastructure 4" loading="lazy" />
          <img src="/scl-9.webp" alt="School Infrastructure 9" loading="lazy" />
        </div>
        <div className="school-infra2" data-aos="fade-up" data-aos-delay="300">
          <img src="/scl-10.webp" alt="School Infrastructure 10" loading="lazy" />
          <img src="/scl-11.webp" alt="School Infrastructure 11" loading="lazy" />
          <img src="/scl-12.JPG" alt="School Infrastructure 12" loading="lazy" />
        </div>
      </div>

      {/* Details Section */}
      <div className="infra-details" data-aos="fade-right">
        <h3>
          The school's infrastructure blends nature with modern facilities,
          offering a tranquil campus filled with trees. It features advanced
          Physics, Chemistry, Computer Science, and Biology labs, providing
          students with hands-on learning experiences in a well-equipped
          environment. This combination of natural surroundings and
          state-of-the-art labs fosters both academic growth and personal
          well-being.
        </h3>
      </div>

      {/* Computer Lab Section */}
      <div className="infra-flex" data-aos="fade-left">
        <div>
          <img src="/computer-lab.webp" alt="Computer Lab" loading="lazy" />
        </div>
        <div className="infra-flex2">
          <h2>COMPUTER LAB</h2>
          <br />
          <p>
            The computer science lab at St. Antony's Higher Secondary School is
            equipped with modern computers, high-speed internet, and a range of
            programming tools like C, C++, Python, and Java. It also features
            networking setups, projectors for interactive learning, and database
            management software like MySQL. Essential software suites like
            Microsoft Office are available, and cybersecurity measures are in
            place. The lab supports practical sessions, projects, and exams,
            helping students develop skills in programming, web design, and
            problem-solving.
          </p>
        </div>
      </div>

      {/* Add more sections with similar AOS attributes */}
      {/* Biology Lab, Chemistry Lab, Physics Lab, etc. */}
      
      <div className="infra-flex" data-aos="fade-right">
        <div className="infra-flex2">
          <h2>LIBRARY</h2>
          <br />
          <p>
            The library at St. Antony's Higher Secondary School is a resourceful
            space that supports both academic and extracurricular learning. It
            houses a diverse collection of books, including textbooks, reference
            materials, journals, magazines, and fiction. The library also
            provides access to digital resources and study materials for
            competitive exams. Quiet study areas are available for individual or
            group learning. The environment encourages reading, research, and
            self-study, offering students a well-rounded academic support system.
          </p>
        </div>
        <div>
          <img src="/lib.webp" alt="Library" loading="lazy" />
        </div>
      </div>
    </>
  );
};

export default School;
