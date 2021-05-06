import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;  

  return (
    <Layout>
      {Object.keys(frontmatter).map((key) => {
        return (
          <div key={key}>
            {key} - {frontmatter[key]}
          </div>
        );
      })}
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "office-page" } }) {
      frontmatter {
        location
        country
        countryAbbreviation
        address
        email
        openingDate
      }
    }
  }
`;
