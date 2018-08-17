// @flow

import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout';

import Hero from 'components/Hero';
import H3 from 'atoms/H3';
import H1 from 'atoms/H1';

import HeroImg from 'images/hero2.jpg';

const IndexPage = () => (
  <DefaultLayout>
    <H1>Hi people</H1>
    <Hero image={HeroImg}>
      <H3 primary> Bitcoin.com’s developer platform</H3>
    hero!</Hero>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <button>Some button text</button>
  </DefaultLayout>
)

export default IndexPage
