// @flow

import * as React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'

import {FaAngleRight } from 'react-icons/fa';

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H2 from 'atoms/H2'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import StyledLink from 'atoms/StyledLink'

import Ul from 'atoms/Ul'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/learn-bitcoin-cash-header.jpg'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const SectionLayout = styled.div`
  display: grid;
  padding-top: ${spacing.medium};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
  `};
`

// const PreviewItem = styled.div`
const SectionItem = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
  grid-auto-rows: min-content;
  grid-template-rows: max-content 1fr max-content;
  grid-column: ${props => (props.full ? 'span 2' : 'auto')};
`

const CTASection = styled.div`
  display: flex;
  justify-content: flex-end;
`

type Props = {
  location: Object,
}

const Learn = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <Hero image={HeroImg}>
      <HeroLayout>
        <H1 background>Learn</H1>
        <H3 primary>Go from hobbyist to professional step-by-step</H3>
      </HeroLayout>
    </Hero>
    <Container>
      <SectionLayout>
        <SectionItem>
          <H2>Tutorials</H2>
          <Text>
            Step by step instructions to build Bitcoin Cash apps from scratch.
            See real world examples get built and have your own working copies
            to bootstrap your project from.
          </Text>
          <CTASection>
            <StyledLink to="/tutorials"><Text  centerVertical>Explore <FaAngleRight /></Text></StyledLink>
          </CTASection>
        </SectionItem>
        <SectionItem>
          <H2>Insights</H2>
          <Text>
            Learn from developers who have already shipped successful apps. What
            worked and what would they do different?
          </Text>
          
          <CTASection>
            <StyledLink to="/insights"><Text  centerVertical>Explore <FaAngleRight /></Text></StyledLink>
          </CTASection>
        </SectionItem>
        <SectionItem>
          <H2>Mastering Bitcoin Cash</H2>
          <Text>
            Based on Mastering Bitcoin by Andreas M. Antonopoulos, Mastering
            Bitcoin Cash is the ultimate guide to the bring your knowledge from
            beginner to professional step by step.
          </Text>
          <CTASection>
          <StyledLink to="/mastering-bitcoin-cash"><Text  centerVertical>Read <FaAngleRight /></Text></StyledLink>
        </CTASection>
        </SectionItem>
        
      </SectionLayout>
    </Container>
  </DefaultLayout>
)

export default Learn
