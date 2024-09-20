import React, { useState, useEffect } from "react";
import PCNavbar from "./components/Navbar/PCNavbar";
import MobNavbar from "./components/Navbar/MobNavbar";
import Welcome from "./components/Welcome/Welcome";
import PCHome from "./components/Home/PCHome";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Events from "./components/Events/Events";
import AA from "./components/AcademicAchievements/AA";
import Faculty from "./components/Faculty/Faculty";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import About from "./components/About/About";
import ContactUs from "./components/ContacUS/ContactUs";
import MobMenu from "./components/Navbar/MobMenu";
import MobHome from "./components/Home/MobHome";
import AnnualDay from "./components/EventDiv/AnnualDay";
import SportsDay from "./components/EventDiv/SportsDay";
import Antofesta from "./components/EventDiv/Antofesta";
import CAC from "./components/EventDiv/CAC";
import ECA from "./components/EventDiv/ECA";
import AActivites from "./components/EventDiv/AActivites";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1224);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1224);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <Welcome />
              {isMobile ? <MobHome /> : <PCHome />}
              <FAQ />
              <Footer />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <Events />
              <Footer />
            </>
          }
        />
        <Route
          path="/academic-achievements"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <AA />
              <Footer />
            </>
          }
        />
        <Route
          path="/faculty"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <Faculty />
              <Footer />
            </>
          }
        />
        <Route
          path="/infrastructure"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <Infrastructure />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route path="/menu" element={<MobMenu />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/annual-day"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <AnnualDay />
              <Footer />
            </>
          }
        />
        <Route
          path="/sports-day"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <SportsDay />
              <Footer />
            </>
          }
        />
        <Route
          path="/antofesta"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <Antofesta />
              <Footer />
            </>
          }
        />
         <Route
          path="/club-and-activities"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <CAC />
              <Footer />
            </>
          }
        />
         <Route
          path="/extracurricular-activities"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <ECA />
              <Footer />
            </>
          }
        />
         <Route
          path="/academic-activities"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <AActivites />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
