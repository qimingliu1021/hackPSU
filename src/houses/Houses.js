import { Box, Button, Typography, AppBar, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";

function Houses() {
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
        <Typography>Houses</Typography>
      </Box>
    </>
  );
}

export default Houses;
