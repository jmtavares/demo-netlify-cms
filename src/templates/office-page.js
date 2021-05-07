import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

const OfficePageContainer = styled.div`
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

const Tag = styled.div`
  text-transform: uppercase;
  font-size: 13px;
  color: #707070;
`

const Title = styled.h1`
  font-size: 45px;
  line-height: 45px;
  font-weight: bold;
`
const Summary = styled.h2`
  font-size: 20px;
  line-height: 28px;
`

const AddressesContainer = styled.div`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`

const OfficePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { address, hero, email } = frontmatter
  const { tag, title, summary, image } = hero

  return (
    <Layout>
      <OfficePageContainer>
        <div>
          <Tag>{tag}</Tag>
          <Title>{title}</Title>
        </div>
        <Img fixed={{ ...image.childImageSharp.fixed }} />
        <Summary>{summary}</Summary>
        <AddressesContainer>
          <div>{address}</div>
          <div>{email}</div>
        </AddressesContainer>
      </OfficePageContainer>
    </Layout>
  )
}

export default OfficePage

export const pageQuery = graphql`
  query OfficePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "office-page" } }) {
      frontmatter {
        location
        country
        countryAbbreviation
        address
        email
        openingDate
        hero {
          tag
          title
          summary
          image {
            childImageSharp {
              fixed(width: 169, height: 169, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
