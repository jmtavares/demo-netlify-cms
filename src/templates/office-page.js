import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import MediaAndCopyBlock from '../components/MediaAndCopyBlock'
import Stats from '../components/Stats'
import JobOpenings from '../components/JobOpenings'
import Quote from '../components/Quote'
import Map from '../components/Map'
import Footer from '../components/Footer'

const OfficePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const {
    location,
    address,
    hero,
    email,
    media_and_copy_block,
    stats,
    job_openings,
    quote,
    map,
  } = frontmatter

  return (
    <Layout>
      <Hero hero={hero} address={address} email={email} />

      <MediaAndCopyBlock data={media_and_copy_block} />

      <Stats data={stats} />

      <JobOpenings data={job_openings} location={location} />

      <Quote data={quote} />

      <Map data={JSON.parse(map)} />
      <Footer />
    </Layout>
  )
}

export default OfficePage

export const pageQuery = graphql`
  query OfficePageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        location
        country
        countryAbbreviation
        address
        email
        openingDate
        map
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
