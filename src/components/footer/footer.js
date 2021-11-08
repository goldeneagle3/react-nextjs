/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Heading, Grid } from "theme-ui";
import { Link } from 'components/link';
import data from './footer.data';
import logocik from "assets/logocik.PNG";
import footerlogo from "assets/footerlogo.jpg";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Grid sx={styles.footerWrapper}>
          <Box sx={styles.left}>
            <Image src={logocik} />
            <br />
            <br />
            <Heading as="h2">İŞLERİMİZ</Heading>
            <Text>
              TAHSİLAT MAKBUZU - SÜREKLİ FORM - SİPARİŞ FİŞİ -FATURA - İRSALİYE
              - ANTETLİ - ZARF - ETİKET -SAYFA FİŞİ
            </Text>
          </Box>
          <Box sx={styles.right}>
            <Heading as="h2" sx={styles.title}>
              İletişim
            </Heading>
            <Text>
              İkitelli OSB Aykosan San. Sit. 4'lü B-Blok No:85 Başakşehir / İST
            </Text>
            <Text>
              <strong>Telefon / İŞ :</strong> 0212 511 06 12
            </Text>
            <Text>
              <strong>Telefon / ÖZEL :</strong> 0530 665 11 29
            </Text>
            <Text>
              <strong>Email :</strong> ezbermatbaa@hotmail.com
            </Text>
          </Box>
        </Grid>
      </Container>
    </footer>
  );
}

const styles = {
  footerWrapper: {
    borderTop: "1px solid",
    borderTopColor: "border_color",
    display: "grid",
    gridGap: 5,
    gridTemplateColumns: [2, "1fr 1fr"],
    alignItems: "center",
    textAlign: "center",
    "@media screen and (max-width: 720px)": {
      gridTemplateColumns: [1, "1fr"],
    },
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 3,
    position: "relative",
    bottom: 1,
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 3,
    position: "relative",
    bottom: -2,
  },
};
