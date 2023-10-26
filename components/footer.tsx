import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90px",
        backgroundColor: "#3a5477",
        paddingY: "1rem",
        marginTop: "1rem",
        position: "fixed",
        opacity: 0.5,
      }}
      bottom={0}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" gap={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <Typography color="white" variant="h6">
                Let's Get in touch
              </Typography>
              <IconButton>
                {" "}
                <LinkedIn
                  fontSize={"large"}
                  sx={{
                    color: "white",
                  }}
                />{" "}
              </IconButton>
              <IconButton>
                {" "}
                <GitHub
                  fontSize={"large"}
                  sx={{
                    color: "white",
                  }}
                />{" "}
              </IconButton>
            </Box>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | Built with NextJS and MUI`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
