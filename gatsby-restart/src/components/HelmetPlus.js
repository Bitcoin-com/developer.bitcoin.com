// @flow

import * as React from 'react'
import Helmet from 'react-helmet'

type Props = {
  title: string,
  description: string,
  image?: string,
  keywords?: string,
  location: { href: string },
  children: React.Node,
}
class HelmetPlus extends React.PureComponent<Props> {
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
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {image && <meta name="image" content={image} />}

        {/* og meta */}
        {location && <meta property="og:url" content={location.href} />}
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {image && <meta property="og:image" content={image} />}

        {/* twitter meta */}
        <meta name="twitter:card" content="summary" />
        {title && <meta name="twitter:title" content={title} />}
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        {image && <meta name="twitter:image" content={image} />}

        {children}
      </Helmet>
    )
  }
}

export default HelmetPlus
