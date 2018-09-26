// @flow

import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { defaultTheme } from 'styles/themes'
import './base.css'

import HelmetPlus from 'components/HelmetPlus'
import NavBar from 'components/NavBar'
import ShareFooter from 'components/ShareFooter'

import Favicon from 'images/favicon.png'

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
        <HelmetPlus
          title={data.site.siteMetadata.title}
          description={
            'bitbox based bitcoin.com developer platform and resources'
          }
          keywords={
            'bitbox, developer tools, bitcoin, bitcoin cash, BCH, wormhole, sdk, api'
          }
          location={location}
          image={Favicon}
        >
          <meta charSet="utf-8" />
          <script>
            var BitcoinMenuWidth = 1152; var BitcoinMenuLang = 'en';
          </script>
          <script
            type="text/javascript"
            src="https://menu.cdn.bitcoindotcom.net/the-footer/dist/universal-footer.js"
          />
          <script src="https://menu.cdn.bitcoindotcom.net/the-menu/dist/universal-menu.js" />
        </HelmetPlus>
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
