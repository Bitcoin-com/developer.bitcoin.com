// @flow

import * as React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H2 from 'atoms/H2'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import StyledLink from 'atoms/StyledLink'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/hero.jpeg'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const BitBoxLayout = styled.div``

type Props = {
  location: Object,
}

const About = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <Hero image={HeroImg}>
      <HeroLayout>
        <H3 primary>Bitcoin.com's developer platform</H3>
        <H1 background>About</H1>
        <H3 background>Developer Tooling, Resources, Cloud, and Market</H3>
      </HeroLayout>
    </Hero>
    <Container>
      <BitBoxLayout />
    </Container>
  </DefaultLayout>
)

export default About
