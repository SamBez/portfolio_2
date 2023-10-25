import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Chip, Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import Link from "next/link";
import Skills from "../components/skills";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            py: 3,
            height: "calc(100vh - 270px)",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Home() {
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>TITLE</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main id="main-body">
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "#0A192F",
            color: "white",
            scrollbarColor: "auto",
            overflowX: "hidden",
            overflow: "scroll",
            paddingX: 5,
            // border: "10px solid yellow",
          }}
          component={"div"}
          onMouseMove={(event) => {
            const xclient = event.clientX;
            const yclient = event.clientY;

            const space = document.getElementById("main-body");
            const areaRect = space.getBoundingClientRect();
            const isInArea =
              xclient >= areaRect.left &&
              xclient <= areaRect.right &&
              yclient >= areaRect.top &&
              yclient <= areaRect.bottom;
            console.log({ isInArea, xclient, yclient });
            if (isInArea) {
              space.style.backgroundColor = "#112044";
            }
          }}
          onMouseLeave={(event) => {
            const space = document.getElementById("main-body");
            space.style.backgroundColor = "initial";
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                marginY: "100px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  // height: 600,
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 3,
                  padding: 5,

                  backgroundColor:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,14,51,1) 28%, rgba(18,18,55,1) 35%, rgba(16,45,83,1) 44%, rgba(10,111,150,1) 100%, rgba(15,54,92,1) 100%, rgba(11,99,138,1) 100%, rgba(12,87,126,1) 100%, rgba(10,111,150,1) 100%, rgba(49,96,130,1) 100%)",
                }}
              >
                <Box
                  width={"40%"}
                  alignContent={"center"}
                  sx={{
                    padding: 10,
                    gap: 5,
                  }}
                >
                  <Typography variant="h4">I'm Samrawit Bezabih</Typography>

                  {/* <Box
                    component={"img"}
                    // width={"100%"}
                    src="sample.jpg"
                    alt="image"
                    sx={{
                      borderRadius: "10%",
                      height: 400,
                    }}
                  /> */}
                  <Divider color="white"></Divider>
                </Box>
                <Box
                  sx={{
                    paddingTop: 10,
                    width: "50%",
                  }}
                >
                  {/* <Typography variant="h1">I'm Samrawit Bezabih</Typography> */}
                  <Typography variant="h6" color={"#8397BD"}>
                    Back in 2012, I decided to try my hand at creating custom
                    Tumblr themes and tumbled head first into the rabbit hole of
                    coding and web development. Fast-forward to today, and I’ve
                    had the privilege of building software for an advertising
                    agency, a start-up, a student-led design studio, and a huge
                    corporation. My main focus these days is building products
                    and leading projects for our clients at Upstatement. In my
                    free time I've also released an online video course that
                    covers everything you need to know to build a web app with
                    the Spotify API. <a href="http://">K o r o k s e e d s .</a>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    color: "white",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{
                      fontSize: "30px",
                    }}
                    textColor="inherit"
                  >
                    <Tab label="Projects" {...a11yProps(0)} />
                    <Tab label="Skills" {...a11yProps(1)} />
                    <Tab label="Education" {...a11yProps(2)} />
                    <Tab label="About" {...a11yProps(3)} />
                  </Tabs>
                </Box>
              </Box>
            </Grid>
            <TabPanel value={value} index={0}>
              <Grid
                item
                xs={12}
                sx={{
                  height: "100vh",
                }}
              >
                <Typography variant="h4"> Projects Show Case</Typography>
                <Box
                  sx={{
                    display: "flex",
                    // justifyContent: 'center',
                    padding: "30px",
                    marginX: "30px",
                    width: "100vw",
                    gap: 5,
                  }}
                >
                  <Box paddingY={5} sx={{ display: "flex", flexWrap: "wrap" }}>
                    <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                      <Typography variant="h4">Project 1</Typography>
                      <Divider></Divider>
                      <Typography variant="h6" color={"#8397BD"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam aliquid vero tenetur? Non reiciendis, veritatis
                        praesentium, excepturi at quisquam repellat
                        exercitationem, possimus temporibus eum similique. Ut
                        dignissimos voluptatum dolores et.
                      </Typography>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                      <Box component={"img"} src="" />
                      <Link href={""}>URL</Link>
                    </Box>
                  </Box>
                  <Box paddingY={5} sx={{ display: "flex", flexWrap: "wrap" }}>
                    <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                      <Typography variant="h4">Project 1</Typography>
                      <Divider></Divider>
                      <Typography variant="h6" color={"#8397BD"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam aliquid vero tenetur? Non reiciendis, veritatis
                        praesentium, excepturi at quisquam repellat
                        exercitationem, possimus temporibus eum similique. Ut
                        dignissimos voluptatum dolores et.
                      </Typography>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                      <Box component={"img"} src="" />
                      <Link href={""}>URL</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid
                item
                xs={12}
                sx={{
                  height: "100vh",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "30px",
                    marginX: "30px",
                  }}
                >
                  <Typography variant="h4"> Skill Sets</Typography>
                  <Box
                    paddingY={5}
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 5,
                    }}
                  >
                    <Skills />

                    {/* <Chip icon={<FaceIcon />} label="With Icon" />
                    <Chip
                      icon={<FaceIcon />}
                      label="With Icon"
                      variant="outlined"
                    />
                    <Chip
                      icon={<FaceIcon />}
                      label="With Icon"
                      variant="outlined"
                    /> */}
                  </Box>
                </Box>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    // justifyContent: 'center',
                    padding: "30px",
                    marginX: "30px",
                  }}
                >
                  <Typography variant="h4"> Education</Typography>
                  <Box paddingY={5}>
                    <Typography variant="h4"> Skill Sets</Typography>
                    <Typography variant="h4"> Skill Sets</Typography>
                    <Typography variant="h4"> Skill Sets</Typography>
                  </Box>
                </Box>
              </Grid>
            </TabPanel>
          </Grid>
        </Box>
      </main>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
