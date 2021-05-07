import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/Layout";

const OfficePageContainer = styled.div`
  max-width: 1152px;
  padding: 20px;
  color: #1c1c1c;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
`;

const Tag = styled.div``;

const OfficePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { hero } = frontmatter;
  const { tag } = hero;

  return (
    <Layout>
      <OfficePageContainer>
        <Tag>{tag}</Tag>        
      </OfficePageContainer>
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
        }
      }
    }
  }
`;
