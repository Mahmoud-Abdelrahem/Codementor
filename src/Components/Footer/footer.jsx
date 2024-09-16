import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "black",
    padding: theme.spacing(1),
  }));

  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            backgroundColor: "black",
          }}
        >
          <Box sx={{ padding: "20px" }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, md: 4 }} sx={{ display: "flex" }}>
                <Item>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Product
                  </Typography>
                  <Typography sx={{ color: "white" }}>Codementor</Typography>
                  <Typography sx={{ color: "white" }}>
                    Find a Mentor to help you
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    Codementor Events
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    Attend and Host virtual events for developers
                  </Typography>
                  <Typography sx={{ color: "white" }}>Dev Projects</Typography>
                  <Typography sx={{ color: "white" }}>
                    Learn Programing by building projects
                  </Typography>
                  <Typography sx={{ color: "white" }}>Arc</Typography>
                  <Typography sx={{ color: "white" }}>
                    Helping Employee with their projects
                  </Typography>
                </Item>
              </Grid>
              <Grid size={{ xs: 6, md: 8 }}>
                <Item>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Pages
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 6, md: 4 }}>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Become Developer
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Become a mentor
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        How It Works
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Find a mentor
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Find Frelancer
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Community
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Blog
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Codementor for Students
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Codementor for Teams
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Code Review{" "}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Pair Programing
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Best Web Design Software
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Coding start kit
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Codementor for Students
                      </Typography>
                      <Typography sx={{ color: "white", marginBottom: "10px" }}>
                        Codementor for Teams
                      </Typography>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ backgroundColor: "white", marginBottom: "20px" }} />

          <Box sx={{ display: "flex", padding: "20px", width: "100%" }}>
            <Typography sx={{ color: "white" }}>
              © Copyright 2024 Codementor
            </Typography>
            <Box sx={{ display: "flex" , marginLeft: "auto" }}>
              <Typography sx={{ color: "white", marginRight: "20px" }}>
                Privacy Policy
              </Typography>
              <Typography sx={{ color: "white", marginRight: "20px" }}>
                Terms of Service
              </Typography>
              <Typography sx={{ color: "white", marginRight: "20px" }}>
                Legal
              </Typography>
              <Typography sx={{ color: "white" , marginRight: "30px" }}>Sitemap</Typography>
            </Box>
            <FacebookIcon
              sx={{ color: "white", marginRight: "20px" }}
            />
            <TwitterIcon sx={{ color: "white", marginRight: "20px" }} />
            <InstagramIcon sx={{ color: "white", marginRight: "20px" }} />
            <LinkedInIcon sx={{ color: "white", marginRight: "20px" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
