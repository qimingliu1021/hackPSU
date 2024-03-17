import {
  Box,
  Button,
  Typography,
  AppBar,
  Toolbar,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel, // Add this if it's missing
} from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const CustomCheckbox = styled(Checkbox)({
  "&.Mui-checked": {
    color: "#4caf50", // Change to whatever color you prefer
    transition: "color 300ms", // Smooth transition for the color change
  },
});

function Preference() {
  const [currentPage, setCurrentPage] = useState("main");
  const navigate = (page) => {
    setCurrentPage(page);
  };
  const [preferences, setPreferences] = useState({
    treesOrPlants: "",
    flowersOrGreens: "",
    careFrequency: "",
  });

  const handlePreferenceChange = (event) => {
    setPreferences({
      ...preferences,
      [event.target.name]: event.target.checked,
    });
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
        <Typography sx={{ mt: 2 }}>
          In order to better serve your needs for plants, please fill out your
          preferences below:
        </Typography>
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">
            1. Do you prefer trees or plants?
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={preferences.treesOrPlants === "trees"}
                  onChange={handlePreferenceChange}
                  name="treesOrPlants"
                />
              }
              label="Trees"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={preferences.treesOrPlants === "plants"}
                  onChange={handlePreferenceChange}
                  name="treesOrPlants"
                />
              }
              label="Plants"
            />
          </FormGroup>

          <FormLabel component="legend" sx={{ mt: 2 }}>
            2. Do you prefer flowers or green plants?
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={preferences.flowersOrGreens === "flowers"}
                  onChange={handlePreferenceChange}
                  name="flowersOrGreens"
                />
              }
              label="Flowers"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={preferences.flowersOrGreens === "greens"}
                  onChange={handlePreferenceChange}
                  name="flowersOrGreens"
                />
              }
              label="Green plants"
            />
          </FormGroup>

          <FormLabel component="legend" sx={{ mt: 2 }}>
            3. How often are you able to take care of plants?
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={preferences.careFrequency === "often"}
                  onChange={handlePreferenceChange}
                  name="careFrequency"
                />
              }
              label="More than three times a week"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={preferences.careFrequency === "weekly"}
                  onChange={handlePreferenceChange}
                  name="careFrequency"
                />
              }
              label="Once a week"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={preferences.careFrequency === "biweekly"}
                  onChange={handlePreferenceChange}
                  name="careFrequency"
                />
              }
              label="Once every two weeks"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={preferences.careFrequency === "monthly"}
                  onChange={handlePreferenceChange}
                  name="careFrequency"
                />
              }
              label="Once a month"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
}

export default Preference;
