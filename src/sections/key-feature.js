/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Hızlı Üretim',
    title: 'Hızlı Üretim',
    text:
      'Siparişlerinizi kalifiyeli elemanlarımızla mümkün olduğunca en kısa sürede teslim ederiz.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'İş Ortaklığı',
    title: 'İş Ortaklığı',
    text:
      'Müşterilerimizle uyumlu işbirlikler kurmayı ve onların güvenini kazanmayı kendimize görev arz ederiz.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Ödüllü Müşteri',
    title: 'Ödüllü Müşteri',
    text:
      'Devamlı ve sürekli iş birliği içinde olduğumuz müşterimizlerin kıymetini bilir ve ilerideki projelerimizde yüzde yirmi beşe varan indirimler sunarız.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Müşteri Destek',
    title: 'Müşteri Destek',
    text:
      'Müşterilerimizin karşılaştığı sorunlara en hızlı ve en açıklayıcı şekilde yardımcı oluruz.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Niteliklerimiz"
          title="Şirketimizin Temel Özellikleri"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              title={item.title}
              text={item.text}
              altText={item.altText}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
