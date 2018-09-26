// @flow

import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { defaultTheme } from 'styles/themes'
import './base.css'

import NavBar from 'components/NavBar'
import ShareFooter from 'components/ShareFooter'

type Props = {
  children: React.Node,
  location: Object,
}

type Data = {
  site: { siteMetadata: { title: string } },
}

const Main = styled.div`
  position: relative;
`

const DefaultLayout = ({ children, location }: Props) => (
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
          <Main>
            <NavBar pathname={location ? location.pathname : ''} />
            {children}
            <ShareFooter location={location} />
          </Main>
        </ThemeProvider>
      </>
    )}
  />
)

export default DefaultLayout
