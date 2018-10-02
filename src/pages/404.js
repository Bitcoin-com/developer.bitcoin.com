// @flow

import React from 'react'
import DefaultLayout from 'components/layouts/DefaultLayout'

import H1 from 'atoms/H1'
import Text from 'atoms/Text'

type Props = {
  location: Object,
}
const NotFoundPage = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <H1>NOT FOUND</H1>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </DefaultLayout>
)

export default NotFoundPage
