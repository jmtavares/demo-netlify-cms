import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { Title, Text, Link } from './Typography'

const MediaAndCopyBlockContainer = styled.div`
  max-width: 1152px;
  padding: 20px;
  color: #1c1c1c;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`

const CTA = styled(Link)`
  margin: 20px 0;
`

const ImagesContainer = styled.div`
  position: relative;
  height: 550px;
`

const LargeImage = styled(Img)`
  position: absolute !important;
  top: 0;
  right: 0;
`

const SmallImage = styled(Img)`
  position: absolute !important;
  bottom: 0;
  left: 0;
`

const CopyBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const StyledTitle = styled(Title)`
  margin-bottom: 40px;
`

const MediaAndCopyBlock = ({ data }) => {
  const { title, summary, cta } = data

  return (
    <MediaAndCopyBlockContainer>
      <ImagesContainer>
        <LargeImage fixed={{ ...data.large_media.childImageSharp.fixed }} />
        <SmallImage fixed={{ ...data.small_media.childImageSharp.fixed }} />
      </ImagesContainer>
      <CopyBlockContainer>
        <StyledTitle>{title}</StyledTitle>
        <Text>{summary}</Text>
        <CTA to={cta.href}>{cta.text}</CTA>
      </CopyBlockContainer>
    </MediaAndCopyBlockContainer>
  )
}

export default MediaAndCopyBlock
