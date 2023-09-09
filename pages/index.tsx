import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Grid, Typography } from "@mui/material";
// import { NextScript, Main } from "next/document";
// import Layout from "./layout";
// import { Box } from "@mui/material";

export default function Home() {
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

      <body>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "#0A192F",
            color: "white",
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  height: 600,
                  border: "1px solid red",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box component={"img"} src="" sx={{}}></Box>
                <Box>
                  <Typography></Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Box>
      </body>

      <style jsx>{`
        main {
          padding: 5rem 0;
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
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
