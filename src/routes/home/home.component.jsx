import { Link } from "react-router-dom";

import { Container, Grid, Button, Box, Typography } from "@mui/material";

import {
  ImageButton,
  ImageSrc,
  Image,
  ImageBackdrop,
  ImageMarked,
} from "./home.styles";

const Home = () => {
  const images = [
    {
      url: "/static/images/buttons/breakfast.jpg",
      title: "Bar Chart",
      link: "bar-chart",
      width: "30%",
    },
    {
      url: "/static/images/buttons/burgers.jpg",
      title: "Scatter Plot",
      link: "scatter-plot",
      width: "30%",
    },
    {
      url: "/static/images/buttons/camera.jpg",
      title: "Heat Map",
      link: "heat-map",
      width: "30%",
    },
    {
      url: "/static/images/buttons/camera.jpg",
      title: "Choropleth Map",
      link: "choropleth-map",
      width: "30%",
    },
    {
      url: "/static/images/buttons/camera.jpg",
      title: "Tree Map",
      link: "tree-map",
      width: "30%",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: 800,
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Link to={image.link}>
              <ImageSrc />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </Link>
          </ImageButton>
        ))}
      </Box>
    </>
  );
};
export default Home;
