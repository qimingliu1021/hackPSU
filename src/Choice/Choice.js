import {
  Box,
  Button,
  Typography,
  AppBar,
  Toolbar,
  getFormControlLabelUtilityClasses,
} from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import houseImg from "../img/house.jpg"; // Assuming your image is in the src/img directory
import apartmentImg from "../img/apartment.jpg";
import officeImg from "../img/office.jpg";

function Choice() {
  const [currentPage, setCurrentPage] = useState("main");
  const navigate = (page) => {
    setCurrentPage(page);
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
      <Box>
        <Typography sx={{ fontSize: "30px" }}>
          How is your living areas like?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Button>I live in an House</Button>
            <img
              src={houseImg}
              alt="House"
              style={{ maxWidth: "350px", display: "block", margin: "0 auto" }}
            />
          </Box>
          <Box>
            <Button>I live in an apartment</Button>
            <img
              src={apartmentImg}
              alt="Apartment"
              style={{ maxWidth: "350px", display: "block", margin: "0 auto" }}
            />
          </Box>
          <Box>
            <Button>I want more plants in my office</Button>
            <img
              src={officeImg}
              alt="Office"
              style={{ maxWidth: "350px", display: "block", margin: "0 auto" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Choice;
