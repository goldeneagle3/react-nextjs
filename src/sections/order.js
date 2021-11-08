import {
  jsx,
  Container,
  Heading,
  Text,
  Box,
  Image,
  Card,
  Grid,
} from "theme-ui";
import SectionHeader from "components/section-header";


import resimone from "assets/resimone.jpg";
import resimtwo from "assets/resimtwo.jpg";
import resimthree from "assets/resimthree.jpg";
import resimfour from "assets/resimfour.jpg";


const data = [
  {
    id: 1,
    title: "Design Quality & performance",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: resimone,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 4,
    price: "100 TL - 300 Tl",
  },
  {
    id: 2,
    title: "Design Quality & performance",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: resimtwo,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
    price: "100 TL - 300 Tl",
  },
  {
    id: 3,
    title: "Layout and organized layers",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: resimthree,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
    price: "100 TL - 300 Tl",
  },
  {
    id: 4,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: resimfour,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    price: "100 TL - 300 Tl",
    review: 4,
  },
  {
    id: 4,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: resimfour,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    price: "100 TL - 300 Tl",
    review: 4,
  },
];

export default function Order() {
  return (
    <section sx={
      { variant: "section.feature" }
      }>
      <Container css={{ textAlign: "center" }}>
        <SectionHeader slogan="Siparişler" title="Üretimlerimizi İnceleyin" />
      </Container>
      <Grid sx={styles.orderWrapper}>
        {data.map((item) => (
          <Box key={item.id}>
            <Card>
              <Image src={item.avatar} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
              <br />
              <Text sx={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'primary'
              }} > Fiyat Aralığımız : {item.price}</Text>
            </Card>
          </Box>
        ))}
      </Grid>
    </section>
  );
}


const styles = {
  orderWrapper: {
    display: "grid",
    gridGap: 5,
    gridTemplateColumns: ["auto", "1fr 1fr 1fr"],
    alignItems: "center",
    mb: '2rem',
    p: "3rem",
    "@media screen and (max-width: 720px)": {
      gridTemplateColumns: ["auto", "1fr 1fr"],
    },
    img: {
      height: "100%",
      width: "100%",
    },
    title: {
      fontSize: [1, 2],
      fontWeight: 700,
      mb: [3, null, null, "22px"],
      color: "text",
      lineHeight: 1.6,
      textAlign: "center",
    },
  },
};