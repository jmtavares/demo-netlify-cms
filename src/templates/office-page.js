import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import MediaAndCopyBlock from '../components/MediaAndCopyBlock'
import Stats from '../components/Stats'
import JobOpenings from '../components/JobOpenings'
import Quote from '../components/Quote'

const OfficePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const {
    address,
    hero,
    email,
    media_and_copy_block,
    stats,
    job_openings,
    quote,
  } = frontmatter

  return (
    <Layout>
      <Hero hero={hero} address={address} email={email} />

      <MediaAndCopyBlock data={media_and_copy_block} />

      <Stats data={stats} />

      <JobOpenings data={job_openings} />

      <Quote data={quote} />
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

        media_and_copy_block {
          title
          media_side
          summary
          cta {
            text
            href
          }
          large_media {
            childImageSharp {
              fixed(width: 500, height: 500, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          small_media {
            childImageSharp {
              fixed(width: 314, height: 300, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }

        stats {
          label
          value
        }

        job_openings {
          summary
          api_config
        }

        quote {
          quote
          author
          media {
            childImageSharp {
              fixed(width: 279, height: 407, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
