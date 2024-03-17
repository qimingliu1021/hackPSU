import "./App.css";
import { useEffect, useState } from "react";
import MainPage from "./MainPage/MainPage";
import Choice from "./Choice/Choice";
import { Box, Card, Typography, Input } from "@mui/material";
import PlantStore from "./plant_store/PlantStore";
import Apartments from "./apartments/Apartments";
import Houses from "./houses/Houses";
import Preference from "./Preference/Preference";

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  // For backend connection
  const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/time");
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "choice":
        return <Choice onNavigate={setCurrentPage} />;
      case "store":
        return <PlantStore onNavigate={setCurrentPage} />;
      default:
        return <MainPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Box>
      {/* <p>The current time is {currentTime}.</p> */}
      {/* {renderPage()} */}
      <MainPage />
      {/* <Choice /> */}
      {/* <PlantStore /> */}
      {/* <Apartments /> */}
      {/* <Houses /> */}
      {/* <Preference /> */}
    </Box>
  );
}

export default App;
