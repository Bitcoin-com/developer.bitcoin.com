// @flow

import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './base.css'

type Props = {
  children: React.Node,
}

type Data = {
  site: { siteMetadata: { title: string} }
}

const DefaultLayout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: Data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <script>
            var BitcoinMenuWidth = 1152;
            var BitcoinMenuLang = 'en';
          </script>

          <script
            type="text/javascript"
            src="https://menu.cdn.bitcoindotcom.net/the-footer/dist/universal-footer.js"
          />
          <script src="https://menu.cdn.bitcoindotcom.net/the-menu/dist/universal-menu.js" />
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

// const DefaultLayout = ({ children }: Props) => <div>{children}</div>

export default DefaultLayout
