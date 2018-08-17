// @flow

/* eslint-disable */

import styled, { css } from 'styled-components'
// import chroma from 'chroma-js'

import media from 'styles/media'
import spacing from 'styles/spacing'

// { screen breakpoint, [font-size, line-height]}
// Absolute pixels so nesting is uneffected;
const sizeMap = {
  small: {
    normal: ['16px', '20px'],
    tiny: ['11px', '13px'],
    small: ['14px', '16.25px'],
    large: ['19px', '23.75px'],
  },
  large: {
    normal: ['18px', '24.75px'],
    tiny: ['12px', '16.5px'],
    small: ['16px', '22px'],
    large: ['20px', '27.5px'],
  },
}

export const textBase = css`
  font-size-adjust: 0.5;
  vertical-align: middle;
  transition: color 0.15s;

  font-size: 16px;
  line-height:20px;

  ${props =>
    props.size &&
    css`
      font-size: ${sizeMap['small'][props.size][0]};
      line-height: ${sizeMap['small'][props.size][1]};
    `} 
    ${media.large`
      font-size:  18px;
      line-height: 24.75px;
      ${props =>
        props.size &&
        css`
          font-size: ${sizeMap['large'][props.size][0]};
          line-height: ${sizeMap['large'][props.size][1]};
        `}
  `};

  
  /* Weight */
  font-weight: ${props => (props.bold ? 700 : 400)};

  ${props =>
    props.area &&
    css`
      grid-area: ${props.area};
    `}


  /* Margin */
  ${props =>
    props.nomargin &&
    css`
      margin: 0;
    `}

  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}

  /* Colors  */
  color: inherit; 
  ${props =>
    props.foreground &&
    css`
      color: ${props => props.theme.foreground} !important;
    `}
  ${props =>
    props.background &&
    css`
      color: ${props => props.theme.background} !important;
    `}
  
  ${props =>
    props.primary &&
    css`
      color: ${props => props.theme.primary} !important;
    `}
    
  ${props =>
    props.secondary &&
    css`
      color: ${props => props.theme.secondary} !important;
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.color} !important;
    `}

  ${props =>
    props.muted &&
    css`
      opacity: 0.8;
    `}
  ${props =>
    props.muted2 &&
    css`
      opacity: 0.65;
    `}

  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
  ${props =>
    props.right &&
    css`
      text-align: right;
    `}

  ${props =>
    props.monospace &&
    css`
      font-family: monospace;
    `}
`

const Text = styled.p`
  ${textBase};
`

export default Text
