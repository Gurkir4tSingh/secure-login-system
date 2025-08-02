import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; 
import Noise from "../components/Noise";      
import "../components/Noise.css";
import SplashCursor from '../components/SplashCursor'



const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", formData);
      console.log("Login successful:", response.data);
      navigate("/home"); 
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div style={styles.pageBackground}> 
      <div style={styles.container}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
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
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Login</button>
        </form>

        <div style={{ marginTop: "20px" }}>
          <p>Don't have an account?</p>
          <Link to="/register">
            <button style={{ ...styles.button, backgroundColor: "#6c63ff" }}>
              Go to Register
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
};


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
    padding: "20px",
    width: "300px",
    border: "1px solid #444",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#1a1a2e",
    color: "#f0f0f0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#2c2c3c",
    color: "#f0f0f0",
    border: "1px solid #555",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#2e89ff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "#ff6b6b",
    fontSize: "14px",
  },
  
};


export default Login;
