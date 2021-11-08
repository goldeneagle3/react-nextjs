import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import React from 'react'
import { Carousel } from "react-responsive-carousel";

import bannermatbaa from "assets/bannermatbaa.jpg";
import lefty from "assets/lefty.jpg";
import righty from "assets/righty.jpg";




export default function Slide(){
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Üstün Matbaa Deneyimi
          </Heading>
          <Text as="p" variant="heroSecondary">
            Check out Our Website to find great Software products and deals!
          </Text>
          {/* <Button variant="primary">Explore</Button> */}
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Carousel
            axis="horizantal"
            autoPlay
            dynamicHeight={true}
            infiniteLoop={true}
            labels
            showArrows={true}
            showThumbs={false}
          >
            <Box>
              <Image src={bannermatbaa} />
              <p className="legend">Legend 1</p>
            </Box>
            <Box>
              <Image src={bannermatbaa} />
              <p className="legend">Legend 2</p>
            </Box>
            <Box>
              <Image src={bannermatbaa} />
              <p className="legend">Legend 3</p>
            </Box>
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${lefty})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "52%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${righty})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "39%",
      "@media screen and (max-width: 720px)": {
        bottom: "90px",
        backgroundPosition: "bottom right",
        backgroundSize: "19%",
      },
    },
    container: {
      pt: '12rem',
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};

