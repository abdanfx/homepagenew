'use client';
import Head from "next/head";
import styles from './page.module.css';
import ResponsiveAppBar from './navbar.js';
import BasicButtons from "./button.js";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Footer from "./footer.js";
import theme from "./theme.js";
import { ThemeProvider } from "@mui/material/styles";


export default function Home() {

  return (
    <>
      <Head>
        <title>Web School</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ResponsiveAppBar></ResponsiveAppBar>

        <Box
          sx={{
            flexGrow: 1,
            zIndex: 1,
            position: "relative",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            width: "100%",
            backgroundImage:
              "linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%)",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 8, md: 9 }}
            sx={{ justifyContent: "center" }}
          >
            <Grid
              item
              xs={8}
              sm={4}
              md={4}
              sx={{
                "@media (min-width: 600px)": {
                  marginTop: "120px",
                },
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h3"
                  sx={{
                    paddingLeft: "40px",
                    color: "#f5f10a",
                    textShadow: "5px 5px 8px #000",
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontWeight: 600,
                    justifyContent: "center",
                  }}
                  gutterBottom
                >
                  Hi, Welcome to our School!
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    paddingLeft: "40px",
                    color: "#f5f10a",
                    textShadow: "5px 5px 8px #000",
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontWeight: 600,
                    justifyContent: "center",
                  }}
                >
                  Learn with FUN!
                </Typography>
              </ThemeProvider>
              <BasicButtons></BasicButtons>
            </Grid>

            <Grid item xs={5} sm={5} md={4}>
              <Image
                src="/Software-Developer.svg"
                alt="My Image"
                width={500}
                height={500}
                layout="responsive"
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "30px",
            gap: 5,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0CAFFF",
            textShadow: "5px 5px 8px #000",
          }}
        >
          <Paper elevation={0}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                display: "flex",
                paddingRight: "20px",
                lineHeight: "70px",
                alignItems: "center",
                color: "white",
                backgroundColor: "#0CAFFF",
                borderRight: "4px solid white",
                "@media (max-width: 600px)": {
                  borderRight: "none",
                  borderBottom: "4px solid white",
                },
              }}
            >
              +150K Tutors
            </Typography>
          </Paper>
          <Paper elevation={0}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                display: "flex",
                padding: "20px",
                lineHeight: "70px",
                alignItems: "center",
                color: "white",
                backgroundColor: "#0CAFFF",
                borderRight: "4px solid white",
                textShadow: "5px 5px 8px #000",
                "@media (max-width: 600px)": {
                  borderRight: "none",
                  borderBottom: "4px solid white",
                },
              }}
            >
              100 Instructors
            </Typography>
          </Paper>
          <Paper elevation={0}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                display: "flex",
                padding: "20px",
                lineHeight: "70px",
                alignItems: "center",
                color: "white",
                backgroundColor: "#0CAFFF",
                textShadow: "5px 5px 8px #000",
                "@media (max-width: 600px)": {
                  borderRight: "none",
                  borderBottom: "4px solid white",
                },
              }}
            >
              150K Student
            </Typography>
          </Paper>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <Grid container>
            <Grid>
              <Typography
                variant="h3"
                sx={{ textShadow: "2px 2px 8px #000", color: "#0039a6" }}
                gutterBottom
              >
                Browse Our Course
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid
            spacing={{ xs: 4, md: 3 }}
            container
            sx={{
              flexGrow: 1,
            }}
            justifyContent="center"
          >
            <Grid item md={3}>
              <Card sx={{ maxWidth: 345 }} elevation="5">
                <CardMedia
                  sx={{
                    layout: "responsive",
                    height: 200,
                    width: 300,
                    justifyContent: "center",
                  }}
                  image="/StartupBusiness.png"
                  title="Startup Digital Business"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="div"
                  >
                    Digital Startup
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={3}>
              <Card sx={{ maxWidth: 345 }} elevation="5">
                <CardMedia
                  sx={{
                    layout: "responsive",
                    height: 200,
                    width: 300,
                    justifyContent: "center",
                  }}
                  image="/Hacker.png"
                  title="Hacker"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="div"
                  >
                    Database Security
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={3}>
              <Card sx={{ maxWidth: 345 }} elevation="5">
                <CardMedia
                  sx={{
                    layout: "responsive",
                    height: 200,
                    width: 300,
                    justifyContent: "center",
                  }}
                  image="/WebDeveloper.png"
                  title="Web Programming"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="div"
                  >
                    Web Programming
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={3}>
              <Card sx={{ maxWidth: 345 }} elevation="5">
                <CardMedia
                  sx={{
                    layout: "responsive",
                    height: 200,
                    width: 300,
                    justifyContent: "center",
                  }}
                  image="/MobileProgramming.png"
                  title="Mobile Programming"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="div"
                  >
                    Mobile Programming
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Typography
              variant="h3"
              sx={{
                paddingTop: "40px",
                textShadow: "2px 2px 8px #000",
                color: "#0039a6",
              }}
              gutterBottom
            >
              Contact Form
            </Typography>
          </Grid>
        </Box>

        <Box
          component="form"
          sx={{
            flexGrow: 1,
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            paddingBottom: "20px",
            paddingTop: "15px",
          }}
          noValidate
          autoComplete="off"
        >
          <Paper elevation={3} sx={{ padding: "40px" }}>
            <FormControl fullWidth variant="standard">
              <TextField
                sx={{ marginBottom: "30px" }}
                fullWidth
                label="Email"
                id="Email"
              />

              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                defaultValue="Your Message ..."
              />
              <Stack sx={{ paddingTop: "20px" }} direction="row" spacing={2}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Stack>
            </FormControl>
          </Paper>
        </Box>
        <Footer></Footer>
      </main>
    </>
  );
}
