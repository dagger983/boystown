import React, { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners"; // Import the ScaleLoader
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./AA.css";

const AA = () => {
  const [sslcData, setSslcData] = useState(null);
  const [hscData, setHscData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration

    const fetchExamData = async () => {
      try {
        const sslcResponse = await fetch("https://appsail-50022339494.development.catalystappsail.in/sslc");
        const sslcJsonData = await sslcResponse.json();
        setSslcData(sslcJsonData);

        const hscResponse = await fetch("https://appsail-50022339494.development.catalystappsail.in/hsc");
        const hscJsonData = await hscResponse.json();
        setHscData(hscJsonData);

        setLoading(false);
      } catch (err) {
        setError("Error fetching data: " + err.message); 
        setLoading(false);
      }
    };

    fetchExamData();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <ScaleLoader
          height={50}
          width={5}
          radius={2}
          margin={2}
          color={"#22355c"}
          loading={loading}
        />
      </div>
    );  // Display loading spinner while data is being fetched
  }

  if (error) {
    return <p>{error}</p>;  // Display error message if there's an issue fetching data
  }

  return (
    <>
      <div className="aa" data-aos="fade-up">
        <h2>ACADEMIC ACHIEVEMENTS</h2>
      </div>
      <div className="aa-2" data-aos="fade-left">
        <h3>
          At St. Antony’s Higher Secondary School, our students consistently
          achieve outstanding results in their 10th, 11th, and 12th-grade
          examinations. The rigorous academic curriculum, combined with the
          dedication of our expert faculty, ensures that students not only meet
          but often exceed their academic goals. Our 10th graders regularly
          achieve top marks in their board exams, setting a strong foundation
          for their future studies. In the 11th and 12th grades, students
          continue to excel, with many attaining high scores and securing
          prestigious placements in higher education institutions. This track
          record of academic success is a testament to our commitment to
          fostering an environment where excellence is both expected and
          achieved.
        </h3>
      </div>

      {/* SSLC Exam Report */}
      <div className="report-container" data-aos="fade-up">
        <h2>Final SSLC Exam Report for Our School</h2>
        <table className="exam-report-table">
          <thead>
            <tr>
              <th>Passed Out Year</th>
              <th>Year Percentage</th>
              <th>Topper of the Year</th>
              <th>Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {sslcData && sslcData.map((row) => (
              <tr key={row.year}> {/* Use year as unique key if applicable */}
                <td>{row.year}</td>
                <td>{row.percentage}</td>
                <td>{row.topper}</td>
                <td>{row.total_marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* HSC Exam Report */}
      <div className="report-container" data-aos="fade-up">
        <h2>Final HSC Exam Report for Our School</h2>
        <table className="exam-report-table">
          <thead>
            <tr>
              <th>Passed Out Year</th>
              <th>Year Percentage</th>
              <th>Topper of the Year</th>
              <th>Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {hscData && hscData.map((row) => (
              <tr key={row.year}> {/* Use year as unique key if applicable */}
                <td>{row.year}</td>
                <td>{row.percentage}</td>
                <td>{row.topper}</td>
                <td>{row.total_marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AA;
