// @flow

import React from 'react'
import styled from 'styled-components'

import media from 'styles/media'

const Container = styled.div`
  width: 100%;
  padding: 1%;

  ${media.large`
    width: 1008px;
    padding: 0;
  `};
`

export default Container
