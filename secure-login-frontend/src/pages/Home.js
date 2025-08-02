import React from "react"; 
import Noise from "../components/Noise";      
import "../components/Noise.css";
import SplashCursor from '../components/SplashCursor'


function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0b0514",
        color: "#2c233b",
      }}
    >
      <h1>"Hello World!"<br />
       
      </h1>

      
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

export default Home;
