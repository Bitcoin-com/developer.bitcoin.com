// @flow

import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { defaultTheme } from 'styles/themes'
import './base.css'

type Props = {
  children: React.Node,
}

type Data = {
  site: { siteMetadata: { title: string } },
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
            {
              name: 'description',
              content:
                'bitbox based bitcoin.com developer platform and resources, ',
            },
            {
              name: 'keywords',
              content:
                'bitbox, developer tools, bitcoin, bitcoin cash, BCH, wormhole, sdk, api',
            },
          ]}
        >
          <html lang="en" />

          {/* Consider nuking these in favor of a developer page specific header/footer*/}
          <script>
            var BitcoinMenuWidth = 1152; var BitcoinMenuLang = 'en';
          </script>
          <script
            type="text/javascript"
            src="https://menu.cdn.bitcoindotcom.net/the-footer/dist/universal-footer.js"
          />
          <script src="https://menu.cdn.bitcoindotcom.net/the-menu/dist/universal-menu.js" />
        </Helmet>
        <ThemeProvider theme={defaultTheme}>
          <div>{children}</div>
        </ThemeProvider>
      </>
    )}
  />
)

// const DefaultLayout = ({ children }: Props) => <div>{children}</div>

export default DefaultLayout
