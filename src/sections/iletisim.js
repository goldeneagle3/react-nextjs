import React, {useState} from "react";
/** @jsx jsx */
import emailjs from "emailjs-com";
import { jsx, Container, Box, Flex,Grid } from "theme-ui";
import { darken, lighten, hex } from "@theme-ui/color";
import { keyframes } from "@emotion/core";
import { Label, Input, Textarea, Button } from "theme-ui";

import SectionHeader from "components/section-header";

import form from 'assets/form.PNG'



export default function Communication() {
  const [message, setMessage] = useState({
    succ: '',
    err: ''
  })

  const {succ,err} = message

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_frjf6nw", "template_p2o8iqi", e.target, "user_kK3gtUONnqUcTs256oBgK").then(
      (result) => {
        setMessage({...message,succ: 'Mesajınız Başarıyla Gönderildi! En kısa sürede size ulaşılacaktır',err:''})
      },
      (error) => {
        setMessage({...message, err:'Bir sorunla karşılaşıldı. Mesajınız gönderilmiş de olabilir. Eğer yakın zamanda cevap alamazsanız tekrardan deneyin!',succ:''})
      }
    );
    e.target.reset()
  }


  return (
    <section
      sx={{
        variant: "section.pricing",
        backgroundImage: `url(${form})`,
        kgroundRepeat: `no-repeat`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "relative",
        mt: 3,
        mb: 4,
      }}
    >
      <Container
        sx={{
          p: 5,
        }}
      >
        <SectionHeader
          slogan="İletişim"
          title="Bir Gönder Tuşu Kadar Yakınız"
        />
        <Grid p={6} sx={styles.grid}>
          <Box sx={styles.form}>
            <Box as="form" onSubmit={sendEmail}>
              <Label htmlFor="name">Adınız ve Soyadınız </Label>
              <Input name="name" id="name" mb={3} />
              <Label htmlFor="company">Firma Adı</Label>
              <Input name="company" id="company" mb={3} />
              <Label htmlFor="email">Email Adressiniz</Label>
              <Input type="email" name="email" id="email" mb={3} required />
              <Label htmlFor="topic">Konu Başlığı</Label>
              <Input name="topic" id="topic" mb={3} />
              <Label htmlFor="message">Mesajınız</Label>
              <Textarea name="message" id="message" rows={6} mb={3} />
              <br />
              {err && <Text> {err} </Text>}
              {succ && <Text> {succ} </Text>}
              <Button variant="secondary">Gönder</Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;


const styles = {
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '75%'
  }
};