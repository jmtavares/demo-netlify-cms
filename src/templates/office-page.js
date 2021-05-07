import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import MediaAndCopyBlock from "../components/MediaAndCopyBlock";

const OfficePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { address, hero, email, media_and_copy_block } = frontmatter;

  return (
    <Layout>
      <Hero hero={hero} address={address} email={email} />

      <MediaAndCopyBlock data={media_and_copy_block}/>
    </Layout>
  );
};

export default OfficePage;

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
      }
    }
  }
`;
