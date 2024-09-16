import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function HeroSection() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "400px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: 'linear-gradient(114deg, rgba(0,26,36,1) 0%, rgba(53,124,168,1) 12%, rgba(46,95,150,1) 100%)',
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "white",
            marginBottom: "20px",
            textAlign: "center",
            fontSize: "40px",
          }}
        >
          Find Developer For < br /> Live Mentorship & Freelance Project
        </Typography>
        <Button variant="contained" sx={{ marginBottom: "100px",backgroundColor:'#ff7900' }}>Get Help Now</Button>
        <img
          src={"src/assets/hero.png"}
          style={{ width: "60%", height: "280px" , top:'55%' , position:'absolute' , zIndex:'11111'}}
          alt="hero"
          loading="lazy"
        />
      </Box>
    </>
  );
}

export default HeroSection;
