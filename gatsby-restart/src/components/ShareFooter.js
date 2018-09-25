// @flow

import React from 'react'
import styled from 'styled-components'
import { FaReddit, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

import H2 from 'atoms/H2'
import H3 from 'atoms/H3'
import Text from 'atoms/text'
import Input from 'atoms/Input'
import Button from 'atoms/Button'
import { SmartLink } from 'atoms/StyledLink'

import Container from 'components/Container'

import spacing from 'styles/spacing'
import media from 'styles/media'

const ShareLayout = styled.div`
  grid-template-columns: 1fr;
  grid-gap: ${spacing.medium};
  display: grid;
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.medium};
  border-top: 1px dashed ${props => props.theme.backgroundMuted};
  padding-top: ${spacing.medium};
  ${media.medium`
    grid-template-columns: .5fr .5fr;
  `};
`

const EmailCTA = styled.div`
  display: grid;
  grid-gap: ${spacing.small};
`

const ShareCTA = styled.div`
  min-height: 75px;
  display: grid;
  align-content: end;
`

const SocialLinks = H3.extend`
  justify-content: end;
  display: grid;
  grid-template-columns: min-content min-content min-content min-content;
  grid-template-rows: 1fr;
  grid-gap: ${spacing.small};
`

type Props = {
  location: Object,
}

const makeShareLink = (
  platform: 'reddit' | 'twitter' | 'facebook' | 'linkedin',
  href: string
) => {
  switch (platform) {
    case 'reddit':
      return `http://www.reddit.com/submit/?url=${href}`
    case 'twitter':
      return `https://www.facebook.com/sharer/sharer.php?u=${href}&via=bitcoincom&hashtags=programming,development,bitcoin,bitcoincash,bch`
    case 'linkedin':
      return `https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=bitcoincom&source=https://developer.bitcoin.com&summary=developer.bitcoin.com`
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${href}`
    default:
      return '/'
  }
}

class ShareFooter extends React.Component<Props> {
  render() {
    const { location } = this.props

    return (
      <Container>
        <ShareLayout>
          <EmailCTA>
            <div id="om-v8lwzo6nqacmgnulutqp-holder" />
          </EmailCTA>
          <ShareCTA>
            <Text right>Share on... </Text>
            <SocialLinks>
              <SmartLink subtle to={makeShareLink('reddit', location.href)}>
                <FaReddit />
              </SmartLink>
              <SmartLink subtle to={makeShareLink('twitter', location.href)}>
                <FaTwitter />
              </SmartLink>
              <SmartLink subtle to={makeShareLink('facebook', location.href)}>
                <FaFacebook />
              </SmartLink>
              <SmartLink subtle to={makeShareLink('linkedin', location.href)}>
                <FaLinkedin />
              </SmartLink>
            </SocialLinks>
          </ShareCTA>
        </ShareLayout>
      </Container>
    )
  }
}

export default ShareFooter
