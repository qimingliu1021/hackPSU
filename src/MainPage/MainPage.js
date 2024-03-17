import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Input,
  CardHeader,
  Button,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import Choice from "../Choice/Choice";
import nycAir from "../img/nyc.jpg";
import usMap from "../img/US-map.jpg";
import airReport from "../img/air-report.jpg";

function MainPage() {
  const [airQuality, setAirQuality] = useState("BAD");
  const [currentPage, setCurrentPage] = useState("main");

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const checkAirQuality = () => {
    const sampleQuality = "GOOD";
    setAirQuality(sampleQuality);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AirQualityPlaces
          </Typography>
          <Button color="inherit" onClick={() => navigate("main")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("airQualities")}>
            Air Qualities
          </Button>
          <Button color="inherit" onClick={() => navigate("store")}>
            Store
          </Button>
          <Button color="inherit" onClick={() => navigate("community")}>
            Join the Community
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ position: "relative", width: "100%" }}>
        {currentPage === "main" && (
          <>
            <Box sx={{ mb: "20px" }}>
              <img
                src={nycAir}
                alt="nyc"
                style={{ width: "100%", height: "30vw", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%", // Centers vertically
                  left: "50%", // Centers horizontally
                  transform: "translate(-50%, -50%)", // Adjust based on image dimensions
                  maxWidth: "500px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "60%", // Adjust the width of the search bar area
                  maxWidth: "500px", // Prevents the search box from becoming too wide on larger screens
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your area"
                  sx={{
                    bgcolor: "background.paper",
                    borderRadius: "5px",
                  }}
                />
                <Button
                  sx={{
                    mt: "10px",
                    color: "white",
                    border: "2px solid white",
                    borderRadius: "5px",
                  }}
                >
                  Search
                </Button>
              </Box>
            </Box>
            <Box>
              <Typography>
                Here is the air quality report you're searching:
              </Typography>
              <img
                src={airReport}
                alt="air-report"
                style={{ width: "50%", height: "20vw", objectFit: "cover" }}
              />
            </Box>
            {airQuality && (
              <Card>
                <Typography>
                  The area you're searching for, the air quality measurement is{" "}
                  {airQuality}. Start planting to improve air quality in your
                  place!"
                </Typography>
              </Card>
            )}
            {airQuality === "BAD" && (
              <Card>
                <Button>Start planting</Button>
              </Card>
            )}
            <img
              src={usMap}
              alt="us-map"
              style={{ width: "50%", height: "20vw", objectFit: "cover" }}
            />
            <Card>
              The are you are searching for, the air quality measurement is; and
              it's Good/bad (a ML Model classification);
            </Card>
          </>
        )}
        {currentPage === "choice" && <Choice />}
      </Box>
    </>
  );
}

export default MainPage;
