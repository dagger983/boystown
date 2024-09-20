import React from "react";
import "./Welcome.css";
const Welcome = () => {
  return (
    <>
      <div className="video-bg-container">
        <video className="video-bg" autoPlay loop muted>
          <source src="/bt-welcome.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content-overlay">
          <h2>
            WELCOME TO <br />
            ST ANTONY'S HIGHER SECONDARY SCHOOL
          </h2>
        </div>
      </div>
      <div className="content-bt"></div>
    </>
  );
};

export default Welcome;
