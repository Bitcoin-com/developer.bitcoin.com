import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'

const SecondPage = () => (
  <DefaultLayout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </DefaultLayout>
)

export default SecondPage
