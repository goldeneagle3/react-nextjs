import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import Products from '../sections/products';
import Communication from '../sections/iletisim'
import About from '../sections/about'
import Slide from './../sections/sliding'
import Order from './../sections/order'


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Ezber Matbaacılık" />
        <Slide />
        <KeyFeature />
        <ServiceSection />
        <Order />
        {/* <CoreFeature /> */}
        <Products />
        <WorkFlow />
        <About />
        <Communication />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
