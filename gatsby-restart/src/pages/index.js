// @flow

import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout';

const IndexPage = () => (
  <DefaultLayout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <button>Some button text</button>
  </DefaultLayout>
)

export default IndexPage
