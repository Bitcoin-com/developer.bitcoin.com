// @flow

import * as React from 'react'
import Helmet from 'react-helmet'

// keywords on every page.
const keywordsBase = [
  'bitcoin developer tools',
  'bitcoin cash developer resource',
  'bitcoin cash',
  'BCH SDK',
  'bitcoin sdk',
  'bitcoin cash api',
  'development tools',
  'blockchain development',
  'bitcoin development',
  'bch developer',
]

type Props = {
  title: string,
  description?: string,
  image?: string,
  keywords?: string[],
  location: { pathname: string, origin: string },
  children?: React.Node,
}
class HelmetPlus extends React.PureComponent<Props> {
  static defaultProps = {
    keywords: [],
  }

  render() {
    const {
      title,
      description,
      keywords,
      image,
      location,
      children,
    } = this.props

    return (
      <Helmet>
        {/* General tags */}
        <meta charSet="utf-8" />
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords ? (
          <meta
            name="keywords"
            content={[...keywords, ...keywordsBase].join(', ')}
          />
        ) : (
          <meta name="keywords" content={keywordsBase.join(', ')} />
        )}
        <meta name="image" content={`${location.origin}/favicon.png`} />}
        {image && <meta name="image" content={`${location.origin}${image}`} />}
        {/* OpenGraph OG meta */}
        {location && (
          <meta
            property="og:url"
            content={`https://developer.bitcoin.com${location.pathname}`}
          />
        )}
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        <meta name="og:image" content={`${location.origin}/favicon.png`} />}
        {image && (
          <meta property="og:image" content={`${location.origin}${image}`} />
        )}
        {/* twitter meta */}
        <meta name="twitter:card" content="summary" />
        {title && <meta name="twitter:title" content={title} />}
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        <meta name="twitter:image" content={`${location.origin}/favicon.png`} />
        }
        {image && (
          <meta name="twitter:image" content={`${location.origin}${image}`} />
        )}
        {children}
      </Helmet>
    )
  }
}

export default HelmetPlus
