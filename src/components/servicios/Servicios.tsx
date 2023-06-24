import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Carousel  from 'react-material-ui-carousel';
import "../../styles/components/servicios.scss";
const auto1 = require("../../assets/galeria/auto1.jpg");
const auto2 = require("../../assets/galeria/auto2.jpg");
const auto3 = require("../../assets/galeria/auto3.jpg");
const auto4 = require("../../assets/galeria/auto4.jpg");

const Servicios = () => {
  const photos = [auto1, auto2, auto3, auto4];
  const carouselContainerStyle = {
    width: '80%', // Adjust the width as needed
    margin: '0 auto',
  };

  const carouselItemStyle = {
    height: '450px', // Adjust the height as needed
    display: 'flex',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <section id="servicios">
      <h2>Servicios</h2>
        <div style={carouselContainerStyle}>

        <Carousel
           animation="slide"
           navButtonsAlwaysVisible={true}
           indicatorContainerProps={{ style: { marginTop: '20px' } }}
        >
        {photos.map((photo, index) => (
          <div key={index} style={carouselItemStyle}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300px"
                      image={photo}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
          </div>
        ))}
      </Carousel>
    </div>
    </section>
  );
};

export default Servicios;
