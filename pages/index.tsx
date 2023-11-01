import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import Link from "next/link";
import Skills from "../components/skills";
import Footer from "../components/footer";
import About from "../components/about";

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
            // height: "100%",
            // width: "100%",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Home() {
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);
  const [borderState, setBorderState] = React.useState("");
  const [imageState, setImageState] = React.useState("");
  console.log({ imageState });
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // const root = document.getElementsByTagName("main") as any;

  // document.addEventListener("mousemove", (evt) => {
  //   let x = evt.clientX / innerWidth;
  //   let y = evt.clientY / innerHeight;

  //   root.style.setProperty("--mouse-x", x);
  //   root.style.setProperty("--mouse-y", y);
  // });

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Box
          id="main-body"
          sx={{
            width: "100vw",
            height: "100vh",
            // bgcolor: "#0A192F",
            backgroundImage:
              "radial-gradient( at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), rgba(0, 0, 0, 0.855) 0.1%, #0A192F)",
            color: "white",
            scrollbarColor: "auto",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: 0,
            },
            paddingX: 5,
          }}
          component={"div"}
          onMouseMove={(event) => {
            const xclient = event.clientX;
            const yclient = event.clientY;

            const space = document.getElementById("main-body");
            let x = (event.clientX / innerWidth) as any;
            let y = (event.clientY / innerHeight) as any;
            space.style.setProperty("--mouse-x", x);
            space.style.setProperty("--mouse-y", y);
            // const areaRect = space.getBoundingClientRect();
            // const isInArea =
            //   xclient >= areaRect.left &&
            //   xclient <= areaRect.right &&
            //   yclient >= areaRect.top &&
            //   yclient <= areaRect.bottom;
            // console.log({ isInArea, xclient, yclient });
            // if (isInArea) {
            //   space.style.backgroundColor = "#112044";
            // }
          }}
          // onMouseLeave={(event) => {
          //   const space = document.getElementById("main-body");
          //   space.style.backgroundColor = "initial";
          // }}
        >
          <Grid
            container
            sx={{
              paddingBottom: "90px",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                marginY: "70px",
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
                    paddingX: 10,
                    paddingY: 3,
                    gap: 5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "20px",
                        md: "30px",
                        xl: "40px",
                      },
                    }}
                  >
                    I'm Samrawit Bezabih
                  </Typography>

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
                    // paddingTop: 10,
                    width: "50%",
                  }}
                >
                  {/* <Typography variant="h1">I'm Samrawit Bezabih</Typography> */}
                  <Typography variant="h6" color={"#8397BD"}>
                    I've always been keen about coding, but then back in 2018, I
                    started to volunteer for building apps for my school which
                    is the university. Taht basically paved my way to learn
                    programming through building products. After graduating I
                    worked on application integration i.e. POS (point of sale)
                    softwares with accounting softwares. And worked on Designing
                    the databases. But programming was it so currently i work on
                    both the front end and the back-end of softwares. I'm doing
                    solo projects and agile methodology is really helping with
                    that. I'm more focused on satsfying clients by making the
                    continuously changing features while still keeping tha
                    software quality.{" "}
                    <a href="http://">K o r o k s e e d s .</a>
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
              <Grid item xs={12} gap={5}>
                <Typography
                  variant="h4"
                  sx={{
                    paddingY: { sm: 2, md: 4 },
                  }}
                >
                  {" "}
                  Projects Show Case
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    padding: "30px",
                    marginX: "30px",
                    height: { sm: "100%", md: 700 },
                    width: { sm: "100%", md: "calc(100vw - 150px)" },
                    // height: { sm: "100%", md: "50%" },

                    overflowY: "scroll",
                    overflowX: "hidden",
                    "&::-webkit-scrollbar": {
                      width: 4,
                    },
                    "&::-webkit-scrollbar-thumb": {
                      bgcolor: "#575787",
                      borderRadius: 20,
                      border: `3px solid #575787`,
                    },
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      padding: "30px",
                      marginX: "30px",
                      borderRadius: "10px",
                      border:
                        borderState === "cncm" ? "1px solid #1A4F98" : "none",
                    }}
                    onMouseEnter={() => setBorderState("cncm")}
                    onMouseLeave={() => setBorderState("")}
                  >
                    <Box
                      paddingY={5}
                      sx={{
                        display: "flex",
                        width: { xs: "100%", sm: "40%" },
                        flexWrap: "wrap",
                      }}
                    >
                      <Box sx={{}}>
                        <Typography variant="h4">CNCM </Typography>
                        <Divider></Divider>
                        <Typography variant="h6" color={"#8397BD"}>
                          A project on artists asset owners copyrighy and
                          royality collecting plastform. I worked on
                          authorization, client payment invoice and and adding
                          News.
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      paddingY={5}
                      sx={{
                        width: { sm: "100%", md: "60%" },
                      }}
                    >
                      <Box sx={{ width: {} }}>
                        <Typography variant="h4">Project 1</Typography>
                        <Divider></Divider>
                      </Box>

                      <Box sx={{ width: "100%" }}>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 3,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBottom: 2,
                          }}
                        >
                          <Box
                            component={"img"}
                            src="../projectassets/cncm1.png"
                            sx={{
                              width: { sm: "90%", md: "80%" },
                              height: { sm: "50%", md: 400 },
                            }}
                            // onMouseEnter={() => setImageState("img4")}
                            // onMouseLeave={() => setImageState("")}
                          />
                          {/* <Box
                            component={"img"}
                            src="../projectassets/sample1.jpg"
                            sx={{
                              width: { sm: "100%" },
                              height:
                                imageState === "img5" || imageState === ""
                                  ? {
                                      sm: "100%",
                                      md: 400,
                                    }
                                  : {
                                      sm: "100%",
                                      md: 200,
                                    },
                            }}
                            onMouseEnter={() => setImageState("img5")}
                            onMouseLeave={() => setImageState("")}
                          /> */}
                          {/* <Box
                            component={"img"}
                            src="../projectassets/sample1.jpg"
                            sx={{
                              width: { sm: "100%" },
                              height:
                                imageState === "img6"
                                  ? {
                                      sm: "100%",
                                      md: 400,
                                    }
                                  : {
                                      sm: "100%",
                                      md: 200,
                                    },
                            }}
                            onMouseEnter={() => setImageState("img6")}
                            onMouseLeave={() => setImageState("")}
                          /> */}
                        </Box>
                        <Link
                          href={"https://cncmethiopia.com/"}
                          style={{
                            color: "white",
                            textDecoration: "none",
                            display: "flex",
                          }}
                        >
                          <Typography fontWeight={"bold"} color={"blue"}>
                            {" "}
                            CNCM Ethiopia{" "}
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      // justifyContent: 'center',
                      padding: "30px",
                      marginX: "30px",
                      // width: "100vw",
                      gap: 2,
                      borderRadius: "10px",

                      border:
                        borderState === "miniapp"
                          ? "1px solid #1A4F98"
                          : "none",
                    }}
                    onMouseLeave={() => setBorderState("")}
                    onMouseEnter={() => setBorderState("miniapp")}
                  >
                    <Box
                      paddingY={5}
                      sx={{
                        display: "flex",
                        width: { xs: "100%", sm: "50%" },
                        flexWrap: "wrap",
                      }}
                    >
                      <Box sx={{}}>
                        <Typography variant="h4">
                          MiniApp Integration{" "}
                        </Typography>
                        <Divider></Divider>
                        <Typography variant="h6" color={"#8397BD"}>
                          This is Ride Mini app which is developed with Macle
                          and added to Telebirr Super App. Which is basically
                          api integration of Telebirr api and Ride app api. I
                          made Express Server for the mini app and set up Web
                          Socket for the Ride Orders.
                        </Typography>
                      </Box>
                    </Box>
                    <Box paddingY={5}>
                      <Box sx={{ width: {} }}>
                        <Typography variant="h4" sx={{ paddingBottom: 2 }}>
                          Project 2
                        </Typography>
                        <Divider></Divider>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            gap: 3,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBottom: 2,
                          }}
                        >
                          <Box
                            component={"img"}
                            src="../projectassets/miniapp1.jpg"
                            sx={{
                              width: { sm: "100%" },
                              height:
                                imageState === "img1"
                                  ? {
                                      sm: "100%",
                                      md: 400,
                                    }
                                  : {
                                      sm: "100%",
                                      md: 200,
                                    },
                            }}
                            onMouseEnter={() => setImageState("img1")}
                            onMouseLeave={() => setImageState("")}
                          />
                          <Box
                            component={"img"}
                            src="../projectassets/miniapp2.jpg"
                            sx={{
                              width: { sm: "100%" },
                              height:
                                imageState === "img2" || imageState === ""
                                  ? {
                                      sm: "100%",
                                      md: 400,
                                    }
                                  : {
                                      sm: "100%",
                                      md: 200,
                                    },
                            }}
                            onMouseEnter={() => setImageState("img2")}
                            onMouseLeave={() => setImageState("")}
                          />
                          <Box
                            component={"img"}
                            src="../projectassets/miniapp3.jpg"
                            sx={{
                              width: { sm: "100%" },
                              height:
                                imageState === "img3"
                                  ? {
                                      sm: "100%",
                                      md: 400,
                                    }
                                  : {
                                      sm: "100%",
                                      md: 200,
                                    },
                            }}
                            onMouseEnter={() => setImageState("img3")}
                            onMouseLeave={() => setImageState("")}
                          />
                        </Box>
                        <Link
                          href={"https://www.ethiotelecom.et/telebirr/"}
                          style={{
                            color: "white",
                            textDecoration: "none",
                            display: "flex",
                          }}
                        >
                          <Typography fontWeight={"bold"} color={"blue"}>
                            {" "}
                            Telebirr
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  {/* <Box
                    sx={{
                      display: "flex",
                      // justifyContent: 'center',
                      padding: "30px",
                      marginX: "30px",
                      // width: "100vw",
                      borderRadius: "10px",
                      gap: 2,
                      border:
                        borderState === "sgt" ? "1px solid #1A4F98" : "none",
                    }}
                    onMouseLeave={() => setBorderState("")}
                    onMouseEnter={() => setBorderState("sgt")}
                  >
                    <Box
                      paddingY={5}
                      sx={{
                        display: "flex",
                        width: { xs: "100%", sm: "50%" },
                        flexWrap: "wrap",
                      }}
                    >
                      <Box sx={{}}>
                        <Typography variant="h4">SGT </Typography>
                        <Divider></Divider>
                        <Typography variant="h6" color={"#8397BD"}>
                          This is one of my fav projects. I think have performed
                          my full stack skills very well because its was a solo
                          project, starting grom setting up the requirements
                          upto developing the full product.
                        </Typography>
                      </Box>
                    </Box>
                    <Box paddingY={5} sx={{}}>
                      <Box sx={{ width: {} }}>
                        <Typography variant="h4">Project 3</Typography>
                        <Divider></Divider>
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 3,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBottom: 2,
                          }}
                        >
                          <Box
                            component={"img"}
                            src="../projectassets/sample1.jpg"
                            sx={{
                              width: { sm: "100%" },
                              height:
                                imageState === "img4"
                                  ? {
                                      sm: "100%",
                                      md: 400,
                                    }
                                  : {
                                      sm: "100%",
                                      md: 200,
                                    },
                            }}
                            onMouseEnter={() => setImageState("img4")}
                            onMouseLeave={() => setImageState("")}
                          />
                          <Box
                            component={"img"}
                            src="../projectassets/sample1.jpg"
                            sx={{
                              width: { sm: "100%" },
                              height:
                                imageState === "img5" || imageState === ""
                                  ? {
                                      sm: "100%",
                                      md: 400,
                                    }
                                  : {
                                      sm: "100%",
                                      md: 200,
                                    },
                            }}
                            onMouseEnter={() => setImageState("img5")}
                            onMouseLeave={() => setImageState("")}
                          />
                          <Box
                            component={"img"}
                            src="../projectassets/sample1.jpg"
                            sx={{
                              width: { sm: "100%" },
                              height:
                                imageState === "img6"
                                  ? {
                                      sm: "100%",
                                      md: 400,
                                    }
                                  : {
                                      sm: "100%",
                                      md: 200,
                                    },
                            }}
                            onMouseEnter={() => setImageState("img6")}
                            onMouseLeave={() => setImageState("")}
                          />
                        </Box>
                        <Link href={"https://cncmethiopia.com/"}>
                          https://cncmethiopia.com/
                        </Link>
                      </Box>
                    </Box>
                  </Box> */}
                </Box>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid
                item
                xs={12}
                sx={
                  {
                    // height: "100vh",
                  }
                }
              >
                <Box
                  sx={{
                    padding: "30px",
                    marginX: "30px",
                  }}
                >
                  <Typography variant="h4" padding={5}>
                    {" "}
                    Skill Sets
                  </Typography>
                  <Box
                    // paddingY={5}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      gap: 5,
                    }}
                  >
                    <Skills />
                  </Box>
                </Box>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    // justifyContent: 'center',
                    padding: "30px",
                    marginX: "30px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      paddingY: { sm: 2, md: 4 },
                    }}
                  >
                    {" "}
                    Education
                  </Typography>
                  <Box paddingY={5} paddingX={5} gap={3}>
                    <Box display={"flex"} gap={5}>
                      <Box
                        component={"img"}
                        src="../education.png"
                        sx={{
                          width: { sm: 20, md: 30, xl: 40 },
                          height: { sm: 20, md: 30, xl: 40 },
                        }}
                      />
                      <Box>
                        <Typography variant="h6" color={"#8397BD"}>
                          {" "}
                          Bachelor of Science in Software Engineering{" "}
                        </Typography>

                        <Typography variant="overline">
                          Addis Ababa Science Technology Univarsity
                        </Typography>
                        <Link
                          href={"http://www.aastu.edu.et/"}
                          style={{
                            color: "white",
                            textDecoration: "none",
                            display: "flex",
                          }}
                        >
                          <Typography fontWeight={"bold"} color={"blue"}>
                            Visit
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                    <Box display={"flex"} gap={5}>
                      <Box
                        component={"img"}
                        src="../employer.png"
                        sx={{
                          width: { sm: 20, md: 30, xl: 40 },
                          height: { sm: 20, md: 30, xl: 40 },
                        }}
                      />
                      <Box>
                        <Typography variant="h6" color={"#8397BD"}>
                          {" "}
                          Jobber Man Soft Skills
                        </Typography>
                        <Link
                          href={
                            "https://drive.google.com/file/d/1im3DIrDW_lxibPpdCrqvWoBnvZ3zUg2x/view?usp=sharing/"
                          }
                          style={{
                            color: "white",
                            textDecoration: "none",
                            display: "flex",
                          }}
                        >
                          <Typography fontWeight={"bold"} color={"blue"}>
                            Checkout
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                    <Box display={"flex"} gap={5}>
                      <Box
                        component={"img"}
                        src="../cisco.png"
                        sx={{
                          width: { sm: 20, md: 30, xl: 40 },
                          height: { sm: 20, md: 30, xl: 40 },
                        }}
                      />
                      <Box>
                        <Typography variant="h6" color={"#8397BD"}>
                          {" "}
                          CCNA (Cisco Certified Network Associate)
                        </Typography>
                        <Link
                          href={
                            "https://drive.google.com/file/d/1im3DIrDW_lxibPpdCrqvWoBnvZ3zUg2x/view?usp=sharing/"
                          }
                          style={{
                            color: "white",
                            textDecoration: "none",
                            display: "flex",
                          }}
                        >
                          <Typography fontWeight={"bold"} color={"blue"}>
                            Checkout
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <About />
            </TabPanel>
          </Grid>
        </Box>
        <Footer></Footer>
      </main>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          bgcolor: "#0A192F";
          background-image: radial-gradient(
            at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%),
            transparent,
            black
          );
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
