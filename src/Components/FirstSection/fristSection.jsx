import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BugReportRoundedIcon from "@mui/icons-material/BugReportRounded";
import ContactsSharpIcon from "@mui/icons-material/ContactsSharp";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
function FristSection() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    boxShadow: "none",
    border: "none",
  }));

  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#003c53" }}
          component="div"
        >
          Get Help from vetted software developers
        </Typography>

        <Grid
          container
          spacing={1}
          columns={16}
          sx={{ width: "80%" }}
        >
          <Grid size={8}>
            <Item
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "400px",
              }}
            >
              <Typography
                sx={{
                  width: { xs: "100%" },
                  fontWeight: "bold",
                  color: "#003c53",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                One-on-One Live <br/> Mentorship
              </Typography>

              <Box sx={{ marginBottom: "20px" }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    marginBottom: "10px",
                  }}
                >
                  <BugReportRoundedIcon
                    sx={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "#1e96e1",
                    }}
                  />
                  <Typography>Debug with the help of an expert</Typography>
                </Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    marginBottom: "10px",
                  }}
                >
                  <ContactsSharpIcon
                    sx={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "#1e96e1",
                    }}
                  />
                  <Typography>Personalize your learning experience</Typography>
                </Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    marginBottom: "10px",
                  }}
                >
                  <DescriptionSharpIcon
                    sx={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "#1e96e1",
                    }}
                  />
                  <Typography>Get Answers to complex problems</Typography>
                </Box>
              </Box>

              <Button variant="contained" sx={{ backgroundColor: "#ff7900" }}>
                Find a Mentor
              </Button>
            </Item>
          </Grid>
          <Grid size={8}>
            <Item
              sx={{
                padding: "20px",
                display: "flex",
                height: "400px",
              }}
            >
              <img
                src={"src/assets/mentorship.jpg"}
                style={{ width: "100%" }}
                alt="mentorship"
                loading="lazy"
              />
            </Item>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={4}
          columns={16}
          sx={{ width: "70%", marginBottom: "30px" }}
        >
          <Grid size={8} sx={{ marginBottom: "30px", borderStyle: "none" }}>
            <Item
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "400px",
              }}
            >
              <img
                src={"src/assets/freelance-job.png"}
                style={{ width: "100%"}}
                alt="freelance-job"
                loading="lazy"
              />
            </Item>
          </Grid>
          <Grid size={8}>
            <Item
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                height: "400px",
              }}
            >
              <Typography
                sx={{
                  width: { xs: "100%" },
                  fontWeight: "bold",
                  color: "#003c53",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                Project-Based Freelance < br /> Work
              </Typography>

              <Box sx={{ marginBottom: "20px" }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    marginBottom: "10px",
                  }}
                >
                  <BugReportRoundedIcon
                    sx={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "#1e96e1",
                    }}
                  />
                  <Typography sx={{ width: { xs: "100%" } }}>
                    Find Experts for on-demand code review
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    marginBottom: "10px",
                  }}
                >
                  <ContactsSharpIcon
                    sx={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "#1e96e1",
                    }}
                  />
                  <Typography>Build Feauter for your project</Typography>
                </Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    marginBottom: "10px",
                  }}
                >
                  <DescriptionSharpIcon
                    sx={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "#1e96e1",
                    }}
                  />
                  <Typography>Turn your idea into reality</Typography>
                </Box>
              </Box>

              <Button variant="contained" sx={{ backgroundColor: "#ff7900" }}>
                Find A Freelancer
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default FristSection;
