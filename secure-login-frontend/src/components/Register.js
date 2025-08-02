import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Noise from "../components/Noise";      
import "../components/Noise.css";
import SplashCursor from '../components/SplashCursor'


function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    navigate("/home");
  };

  return (
    
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Register</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input 
            type="text" 
            name="username" 
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required 
            style={styles.input}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required 
            style={styles.input}
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required 
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>

        <div style={{ marginTop: "20px" }}>
          <p>Already have an account?</p>
          <Link to="/login">
            <button style={{ ...styles.button, backgroundColor: "#6c63ff" }}>
              Go to Login
            </button>
          </Link>
        </div>
      </div>
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <SplashCursor /> 
    </div>
  );
}

const styles = {
  pageBackground: {
    backgroundColor: "#0b0514",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "400px",
    padding: "2rem",
    border: "1px solid #444",
    borderRadius: "10px",
    backgroundColor: "#1a1a2e",
    color: "#f0f0f0",
    textAlign: "center",
  },
  heading: {
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.7rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #555",
    backgroundColor: "#2c2c3c",
    color: "#f0f0f0",
  },
  button: {
    padding: "0.7rem",
    fontSize: "1rem",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
 

export default Register;
