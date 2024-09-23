import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./School.css";

const School = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });

    // Set initial mobile state
    checkScreenSize();

    // Event listener for resizing
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
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
      <div className="school-infra" data-aos={isMobile ? "fade-up" : "fade-up"}>
        <div className="school-infra2">
          <img src="/scl-1.webp" alt="School Infrastructure 1" loading="lazy" />
          <img src="/scl-2.webp" alt="School Infrastructure 2" loading="lazy" />
          <img src="/scl-3.webp" alt="School Infrastructure 3" loading="lazy" />
        </div>
        <div
          className="school-infra2"
          data-aos={isMobile ? "fade-up" : "fade-up"}
          data-aos-delay="100"
        >
          <img src="/scl-7.JPG" alt="School Infrastructure 7" loading="lazy" />
          <img src="/scl-5.jpg" alt="School Infrastructure 5" loading="lazy" />
          <img src="/scl-6.webp" alt="School Infrastructure 6" loading="lazy" />
        </div>
        <div
          className="school-infra2"
          data-aos={isMobile ? "fade-up" : "fade-up"}
          data-aos-delay="200"
        >
          <img src="/scl-8.webp" alt="School Infrastructure 8" loading="lazy" />
          <img src="/scl-4.JPG" alt="School Infrastructure 4" loading="lazy" />
          <img src="/scl-9.webp" alt="School Infrastructure 9" loading="lazy" />
        </div>
        <div
          className="school-infra2"
          data-aos={isMobile ? "fade-up" : "fade-up"}
          data-aos-delay="300"
        >
          <img
            src="/scl-10.webp"
            alt="School Infrastructure 10"
            loading="lazy"
          />
          <img
            src="/scl-11.webp"
            alt="School Infrastructure 11"
            loading="lazy"
          />
          <img
            src="/scl-12.JPG"
            alt="School Infrastructure 12"
            loading="lazy"
          />
        </div>
      </div>

      {/* Details Section */}
      <div
        className="infra-details"
        data-aos={isMobile ? "fade-up" : "fade-right"}
      >
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
      <div className="infra-flex" data-aos={isMobile ? "fade-up" : "fade-left"}>
        <div>
          <img src="/computer-lab.webp" alt="Computer Lab" loading="lazy" />
        </div>
        <div className="infra-flex2">
          <h2>COMPUTER LAB</h2>
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

      <div
        className="infra-flex"
        data-aos={isMobile ? "fade-up" : "fade-right"}
      >
        <div className="infra-flex2">
          <h2>BIOLOGY LAB</h2>
          <p>
            The biology lab at St. Antony's Higher Secondary School is
            well-equipped for practical learning and experiments. It features
            microscopes, specimen slides, anatomical models, and various lab
            tools like test tubes, beakers, and dissection kits. The lab is
            stocked with chemicals and biological samples for experiments
            related to botany, zoology, and microbiology. Safety equipment like
            gloves, goggles, and first-aid kits are also available. Students use
            the lab for hands-on experience in understanding biological
            processes, anatomy, and ecosystems.
          </p>
        </div>
        <div>
          <img src="/bio-lab.webp" alt="Biology Lab" loading="lazy" />
        </div>
      </div>

      <div className="infra-flex" data-aos={isMobile ? "fade-up" : "fade-left"}>
        <div>
          <img src="/chem-lab.webp" alt="Chemistry Lab" loading="lazy" />
        </div>
        <div className="infra-flex2">
          <h2>CHEMISTRY LAB</h2>
          <p>
            The chemistry lab at St. Antony's Higher Secondary School is
            equipped with modern tools and safety measures for conducting
            experiments. It includes lab benches with sinks, gas connections,
            and fume hoods for safe chemical handling. The lab has a variety of
            glassware like beakers, flasks, and test tubes, along with chemicals
            for experiments in organic, inorganic, and physical chemistry.
            Safety equipment such as goggles, gloves, and fire extinguishers is
            provided to ensure a secure environment. Students use the lab for
            practical sessions that deepen their understanding of chemical
            reactions and principles.
          </p>
        </div>
      </div>

      <div
        className="infra-flex"
        data-aos={isMobile ? "fade-up" : "fade-right"}
      >
        <div className="infra-flex2">
          <h2>PHYSICS LAB</h2>
          <p>
            The physics lab at St. Antony's Higher Secondary School is designed
            for hands-on learning of fundamental physics concepts. It is
            equipped with instruments like oscilloscopes, voltmeters, ammeters,
            and measuring tools such as vernier calipers, micrometers, and
            stopwatches. There are also setups for experiments in mechanics,
            optics, electromagnetism, and thermodynamics. The lab provides a
            safe environment with protective gear and guidelines for handling
            equipment. Students engage in experiments that help them explore and
            understand the principles of physics in a practical way.
          </p>
        </div>
        <div>
          <img src="/phy-lab.webp" alt="Physics Lab" loading="lazy" />
        </div>
      </div>

      <div className="infra-flex" data-aos={isMobile ? "fade-up" : "fade-left"}>
        <div>
          <img src="/lib.webp" alt="Library" loading="lazy" />
        </div>
        <div className="infra-flex2">
          <h2>LIBRARY</h2>
          <p>
            The library at St. Antony's Higher Secondary School is a resourceful
            space that supports both academic and extracurricular learning. It
            houses a diverse collection of books, including textbooks, reference
            materials, journals, magazines, and fiction. The library also
            provides access to digital resources and study materials for
            competitive exams. Quiet study areas are available for individual or
            group learning. The environment encourages reading, research, and
            self-study, offering students a well-rounded academic support
            system.
          </p>
        </div>
      </div>

      <div
        className="infra-flex"
        data-aos={isMobile ? "fade-up" : "fade-right"}
      >
        <div className="infra-flex2">
          <h2>SMART CLASS</h2>
          <p>
            St. Antony's Higher Secondary School offers state-of-the-art smart
            classrooms to enhance the learning experience. Equipped with digital
            projectors, interactive boards, and multimedia resources, our smart
            classes make lessons more engaging and interactive. This technology
            helps students visualize complex concepts, access online learning
            materials, and participate in collaborative activities, fostering a
            dynamic and stimulating educational environment. Smart classrooms
            support personalized learning, making education more accessible and
            enjoyable.
          </p>
        </div>
        <div>
          <img src="/smart_class.webp" alt="Smart Class" loading="lazy" />
        </div>
      </div>
      <div className="infra-flex" data-aos={isMobile ? "fade-up" : "fade-left"}>
        <div>
          <img src="/vb.webp" alt="Library" loading="lazy" />
        </div>
        <div className="infra-flex2">
          <h2>VOLLEY BALL PLAYGROUND</h2>
          <p>
            The volleyball court at St. Antony's Higher Secondary School is a
            well-maintained facility for both recreational play and competitive
            matches. It features a standard-sized court with proper boundary
            markings and a net. The court is used during physical education
            classes, inter-school tournaments, and practice sessions, providing
            students with opportunities to develop their skills, teamwork, and
            fitness through the sport of volleyball.
          </p>
        </div>
      </div>

      <div
        className="infra-flex"
        data-aos={isMobile ? "fade-up" : "fade-right"}
      >
        <div className="infra-flex2">
          <h2>FOOTBALL PLAYGROUND</h2>
          <p>
            The football playground at St. Antony's Higher Secondary School is a
            large, well-maintained field designed for both practice and
            competitive matches. The ground features goalposts, boundary
            markings, and ample space for full 11-a-side games. It is used for
            physical education classes, inter-school tournaments, and regular
            practice sessions. The facility encourages teamwork, physical
            fitness, and skill development, offering students an excellent space
            for honing their football abilities.
          </p>
        </div>
        <div>
          <img src="/fb.webp" alt="Smart Class" loading="lazy" />
        </div>
      </div>
    </>
  );
};

export default School;
