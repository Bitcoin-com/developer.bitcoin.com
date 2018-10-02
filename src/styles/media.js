// @flow

import { css } from 'styled-components'

// Define smallest size for each breakpoint.
// small is same as no media query.
const sizes = {
  large: 1140,
  medium: 720,
  small: 0,
}
// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label, idx) => {
  acc[label] = (...args: any) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})

export { media, sizes }

export default media
