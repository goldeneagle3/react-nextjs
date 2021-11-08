/** @jsx jsx */
import { jsx } from "theme-ui";
import { darken, lighten, hex } from "@theme-ui/color";
import { Container, Grid, Box, Link,Text } from "theme-ui";
import SectionHeader from "components/section-header";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import {AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'


import yap from 'assets/yap.png'

const social = [
  {
    id: 1,
    name: "facebook",
    path: "#",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    name: "twitter",
    path: "#",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    name: "instagram",
    path: "#",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    name: "linkedin",
    path: "#",
    icon: <AiFillLinkedin />,
  },
  {
    id: 5,
    name: "youtube",
    path: "#",
    icon: <AiFillYoutube />,
  },
];


export default function About() {
  return (
    <section sx={({ variant: "section.pricing" }, styles.arka)} id="pricing">
      <Container p={7}>
        <SectionHeader
          slogan="Hakkımızda"
          title="Şirketimiz Hakkında Detaylı Bir Yazı"
        />
        <Box>
          <Text
          sx={{
            fontSize:'17px',
            fontWeight:'500',
          }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            maiores odit veniam vero obcaecati, quaerat corporis? Quis,
            doloribus neque. Sapiente, saepe omnis nemo voluptate similique
            asperiores aspernatur consequuntur ratione suscipit facere, ut, fuga
            deleniti iusto dolores quibusdam delectus laborum perspiciatis
            minima autem? Doloribus officiis esse unde laborum numquam provident
            voluptas illo iste libero aliquam eaque expedita architecto fuga
            velit reprehenderit eum, nemo quos sunt. Cumque suscipit nemo
            nostrum odio debitis exercitationem voluptatibus laborum vero magni
            quam possimus, tempora obcaecati, aliquid sunt qui nihil corporis a
            quasi eius, consectetur adipisci! Magnam a eaque laboriosam
            repellendus vero ad reprehenderit asperiores nesciunt deserunt!
          </Text>
          <Box sx={styles.socialShare} className="social__share">
            {social.map((item) => (
              <Link key={item.id} href={item.path} sx={styles.link}>
                {item.icon}
              </Link>
            ))}
          </Box>
          <Box sx={styles.altlink}>
            <Link href="#" sx={styles.yazi} >Trendyol</Link>
            |
            <Link href="#" sx={styles.yazi} >HepsiBurada</Link>
          </Box>
        </Box>
      </Container>
    </section>
  );
}


const styles = {
  arka: {
    backgroundImage: `url(${yap})`,
    kgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    mt: 7,
    mb: 4,
    pt: 9,
    px: 3,
  },
  socialShare: {
    display: "flex",
    mt: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    p: 4,
    color: darken("tomato", 0.6),
    "&:hover": {
      color: "primary",
    },
  },
  altlink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  yazi: {
    px: 3,
    textDecoration: "none",
    color: darken("steelblue", 0.20),
    "&:hover": {
      color: "primary",
    },
  },
};
