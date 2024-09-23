import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import ManagementStaff from "./ManagementStaff";
import RegularStaff from "./RegularStaff"; // Import RegularStaff
import OfficeStaff from "./OfficeStaff"; // Import OfficeStaff
import MainEvent from "./MainEvent";
import SubEvent from "./SubEvent";
import Hsc from "./Hsc";
import Sslc from "./Sslc";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [managementStaff, setManagementStaff] = useState([]);
  const [regularStaff, setRegularStaff] = useState([]); // State for Regular Staff
  const [officeStaff, setOfficeStaff] = useState([]); // State for Office Staff
  const [mainEvent, setMainEvent] = useState([]);
  const [subEvent, setSubEvent] = useState([]);
  const [hsc, setHsc] = useState([]);
  const [sslc, setSslc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  const fetchData = async () => {
    try {
      const [
        staffRes,
        regularStaffRes,
        officeStaffRes,
        mainEventRes,
        subEventRes,
        hscRes,
        sslcRes,
      ] = await Promise.all([
        axios.get(
          "https://appsail-50022339494.development.catalystappsail.in/managementStaff"
        ),
        axios.get(
          "https://appsail-50022339494.development.catalystappsail.in/regularStaff"
        ), // Fetch Regular Staff
        axios.get(
          "https://appsail-50022339494.development.catalystappsail.in/officeStaff"
        ), // Fetch Office Staff
        axios.get(
          "https://appsail-50022339494.development.catalystappsail.in/mainEvent"
        ),
        axios.get(
          "https://appsail-50022339494.development.catalystappsail.in/subEvent"
        ),
        axios.get(
          "https://appsail-50022339494.development.catalystappsail.in/hsc"
        ),
        axios.get(
          "https://appsail-50022339494.development.catalystappsail.in/sslc"
        ),
      ]);

      setManagementStaff(staffRes.data);
      setRegularStaff(regularStaffRes.data); // Set Regular Staff data
      setOfficeStaff(officeStaffRes.data); // Set Office Staff data
      setMainEvent(mainEventRes.data);
      setSubEvent(subEventRes.data);
      setHsc(hscRes.data);
      setSslc(sslcRes.data);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication logic
    if (username === "admin" && password === "bt@2024") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid Username or Password. Please try again.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login">
        <Helmet>
          <title>Admin Dashboard</title>
          <meta
            name="description"
            content="Discover St. Antony's Higher Secondary School in Manjampatty, where we provide quality education, holistic development, and a supportive learning environment for students. Enroll now!"
          />
          <meta
            name="keywords"
            content="St. Antony's Higher Secondary School, Manjampatty, quality education, holistic development, student enrollment, extracurricular activities, school facilities, quality education in Manjampatty, school with hostel facilities in Tamil Nadu, top school in Manjampatty, best higher secondary school in Tamil Nadu"
          />
          <meta name="author" content="St. Antony's Higher Secondary School" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charset="UTF-8" />
          <meta
            property="og:title"
            content="St. Antony's Higher Secondary School - Excellence in Education"
          />
          <meta
            property="og:description"
            content="Providing quality education and holistic development in Manjampatty."
          />
          <meta
            property="og:image"
            content="https://stantonyshssmanj.com/btlogo.webp"
          />
          <meta property="og:url" content="https://stantonyshssmanj.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="St. Antony's Higher Secondary School"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="St. Antony's Higher Secondary School"
          />
          <meta
            name="twitter:description"
            content="Quality education and holistic development for students in Manjampatty."
          />
          <meta
            name="twitter:image"
            content="https://stantonyshssmanj.com/btlogo.webp"
          />
          <meta name="twitter:site" content="@yourtwitterhandle" />

          <meta name="theme-color" content="#317EFB" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />
          <meta
            name="google-site-verification"
            content="PfgVeXPYntYcZVpdhvfEpF58Blt-T0MQze0dw_TaDGs"
          />

          <link
            rel="apple-touch-icon"
            href="https://stantonyshssmanj.com/apple-touch-icon.png"
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://stantonyshssmanj.com"
          />
          <link
            rel="alternate"
            hreflang="ta"
            href="https://stantonyshssmanj.com/ta"
          />
        </Helmet>
        <H1>Login to Admin Dashboard</H1>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <RegularStaff
        regularStaff={regularStaff}
        setRegularStaff={setRegularStaff}
      />
      <ManagementStaff
        managementStaff={managementStaff}
        setManagementStaff={setManagementStaff}
      />
      <OfficeStaff officeStaff={officeStaff} setOfficeStaff={setOfficeStaff} />{" "}
      {/* Add Office Staff component */}
      <MainEvent mainEvent={mainEvent} setMainEvent={setMainEvent} />
      <SubEvent subEvent={subEvent} setSubEvent={setSubEvent} />
      <Hsc hsc={hsc} setHsc={setHsc} />
      <Sslc sslc={sslc} setSslc={setSslc} />
    </div>
  );
};

export default AdminDashboard;
