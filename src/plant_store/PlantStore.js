import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Anthurium from "../img/Anthurium.jpg";
import DumbCane from "../img/dumb-cane.jpg";
import GoldenPothos from "../img/Golden-Pothos.jpg";
import Sunflower from "../img/sunflower.jpg";
import Peony from "../img/peony.jpg";
import Lily from "../img/lily.jpg";
import Hackberry from "../img/Hackberry.jpg";
import Redbud from "../img/Redbud.jpg";
import Pine from "../img/pine.jpg";

function PlantStore() {
  const [currentPage, setCurrentPage] = useState("main");
  const navigate = (page) => {
    setCurrentPage(page);
  };

  const plants = [
    {
      id: 1,
      name: "Anthurium",
      category: "green plants",
      caring: 3,
      reduced_co2: 101,
      image: Anthurium,
    },
    {
      id: 2,
      name: "Dumb Cane",
      category: "green plants",
      caring: 1,
      reduced_co2: 111,
      image: DumbCane,
    },
    {
      id: 3,
      name: "Golden Pothos",
      category: "green plants",
      caring: 0.5,
      reduced_co2: 101,
      image: GoldenPothos,
    },
    {
      id: 4,
      name: "Sunflower",
      category: "flower",
      caring: 6,
      reduced_co2: 50,
      image: Sunflower,
    },
    {
      id: 5,
      name: "Peony",
      category: "flower",
      caring: 4,
      reduced_co2: 30,
      image: Peony,
    },
    {
      id: 6,
      name: "Lily",
      category: "flower",
      caring: 5,
      reduced_co2: 40,
      image: Lily,
    },
    {
      id: 7,
      name: "Hackberry",
      category: "tree",
      caring: 0.2,
      reduced_co2: 300,
      image: Hackberry,
    },
    {
      id: 8,
      name: "Redbud",
      category: "tree",
      caring: 0.5,
      reduced_co2: 241,
      image: Redbud,
    },
    {
      id: 9,
      name: "Pine",
      category: "tree",
      caring: 1,
      reduced_co2: 200,
      image: Pine,
    },
  ];

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
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Store
        </Typography>
        <Grid container spacing={2}>
          {plants.map((plant) => (
            <Grid item xs={12} sm={6} md={4} key={plant.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={plant.image}
                  alt={plant.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {plant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {plant.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Care Level: {plant.caring}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    CO2 Reduction: {plant.reduced_co2} ppm
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default PlantStore;
