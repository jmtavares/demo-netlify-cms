import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { Title, Text, Link } from './Typography'

const QuoteContainer = styled.div`
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

const CopyBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const StyledTitle = styled(Title)`
  margin-bottom: 40px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Quote = ({ data }) => {
  const { quote, author, media } = data

  return (
    <QuoteContainer>
      <CopyBlockContainer>
        <StyledTitle>{quote}</StyledTitle>
        <Text>{author}</Text>
      </CopyBlockContainer>
      <ImageContainer>
        <Img fixed={{ ...media.childImageSharp.fixed }} />
      </ImageContainer>
    </QuoteContainer>
  )
}

export default Quote
