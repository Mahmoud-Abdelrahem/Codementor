import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";

function SecondSection() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <>
      <Box
        sx={{
          width: "100%",
          background:
            "linear-gradient(114deg, rgba(0,26,36,1) 0%, rgba(53,124,168,1) 12%, rgba(46,95,150,1) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          marginBottom: "10px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "white",
            marginBottom: "20px",
            textAlign: "center",
            fontSize: "30px",
            marginTop: "20px",
          }}
        >
          Connect with <br /> 12000+ top developers anytime, Anywhere
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            width: "65%",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <Grid container spacing={2} columns={24}>
            <Grid size={8}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{ width: "100px", height: "100px" }}
                  alt="Remy Sharp"
                  src="src/assets/1.avif"
                />
                <Box sx={{ marginLeft: "5px" }}>
                  <Typography sx={{ fontWeight: "bold", color: "black" }}>
                    Jessamyn Smith
                  </Typography>
                  <Typography>Experinced Full Stack Web Developer </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid container size={16}>
              <Grid size={12}>
                <Item
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ width: "100px", height: "100px" }}
                    alt="Remy Sharp"
                    src="src/assets/2.jpeg"
                  />
                  <Box sx={{ marginLeft: "5px" }}>
                    <Typography sx={{ fontWeight: "bold", color: "black" }}>
                      Daniel Hamilton
                    </Typography>
                    <Typography>Experinced Full Stack Web Developer</Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid size={12}>
                <Item
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ width: "100px", height: "100px" }}
                    alt="Remy Sharp"
                    src="src/assets/3.jpeg"
                  />
                  <Box sx={{ marginLeft: "5px" }}>
                    <Typography sx={{ fontWeight: "bold", color: "black" }}>
                      Martijen Pieter{" "}
                    </Typography>
                    <Typography>Experinced Full Stack Web Developer</Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
            <Grid size={8}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{ width: "100px", height: "100px" }}
                  alt="Remy Sharp"
                  src="src/assets/4.jpeg"
                />
                <Box sx={{ marginLeft: "5px" }}>
                  <Typography sx={{ fontWeight: "bold", color: "black" }}>
                    lonic brown
                  </Typography>
                  <Typography>Experinced Full Stack Web Developer </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid container columns={12} size={16}>
              <Grid size={6}>
                <Item
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ width: "100px", height: "100px" }}
                    alt="Remy Sharp"
                    src="src/assets/5.jpeg"
                  />
                  <Box sx={{ marginLeft: "5px" }}>
                    <Typography sx={{ fontWeight: "bold", color: "black" }}>
                      lamar smith
                    </Typography>
                    <Typography>Experinced Full Stack Web Developer</Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid size={6}>
                <Item
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ width: "100px", height: "100px" }}
                    alt="Remy Sharp"
                    src="src/assets/6.jpeg"
                  />
                  <Box sx={{ marginLeft: "5px" }}>
                    <Typography sx={{ fontWeight: "bold", color: "black" }}>
                      Ben Jotlib
                    </Typography>
                    <Typography>Experinced Full Stack Web Developer</Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "white", marginBottom: "20px" }}
          >
            Start Work With Our Developers
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "#ff7900" }}>
            Get Started
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default SecondSection;
