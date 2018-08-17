// @flow

import React from 'react'
import styled from 'styled-components'

import media from 'styles/media'

const Container = styled.div`
  width: 98%;
  padding: 1%;

  ${media.large`
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  `};
`

export default Container
