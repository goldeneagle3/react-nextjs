/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Hızlı Üretim",
    title: "Hızlı Üretim",
    text:
      "Siparişlerinizi kalifiyeli elemanlarımızla mümkün olduğunca en kısa sürede teslim ederiz.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "İş Ortaklığı",
    title: "İş Ortaklığı",
    text:
      "Müşterilerimizle uyumlu işbirlikler kurmayı ve onların güvenini kazanmayı kendimize görev arz ederiz.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Ödüllü Müşteri",
    title: "Ödüllü Müşteri",
    text:
      "Devamlı ve sürekli iş birliği içinde olduğumuz müşterimizlerin kıymetini bilir ve ilerideki projelerimizde yüzde yirmi beşe varan indirimler sunarız.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Müşteri Destek",
    title: "Müşteri Destek",
    text:
      "Müşterilerimizin karşılaştığı sorunlara en hızlı ve en açıklayıcı şekilde yardımcı oluruz.",
  },
];

export default function Feature() {
  return (
    <section sx={{variant:'section.feature'}} >
      <Container>
        <SectionHeader 
          slogan="Kalite İcraati"
          title="Diğer Özelliklerimiz"
        />
        <Grid sx={styles.grid}>
          {data.map((item)=>(
            <FeatureCard 
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
