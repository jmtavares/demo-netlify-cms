import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Link } from './Typography'

const ColumnTitle = styled.div`
  font-size: 24px;
  display: flex;
  font-weight: bold;
`

const Ul = styled.ul`
  margin: 0 !important;
`

const StyledLink = styled(Link)`
  border: none;
  padding: 10px !important;
  font-size: 16px;
`

const Footer = ({ offices }) => {
  return (
    <footer className="footer has-text-white-ter">
      <div className="content has-text-centered"></div>
      <div className="content has-text-centered has-text-white-ter">
        <div className="container has-text-white-ter">
          <div style={{ maxWidth: '100vw' }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ColumnTitle>Pages</ColumnTitle>
                <Ul className="menu-list">
                  <li>
                    <StyledLink to="/" className="navbar-item">
                      Home
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink className="navbar-item" to="/">
                      About
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink className="navbar-item" to="/">
                      Products
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink className="navbar-item" to="/">
                      Form Examples
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink className="navbar-item" to="/admin">
                      Admin
                    </StyledLink>
                  </li>
                </Ul>
              </section>
            </div>
            <div className="column is-4">
              <section className="menu">
                <ColumnTitle>Offices</ColumnTitle>
                <Ul className="menu-list">
                  {offices.map((office) => {
                    return (
                      <li key={office.node.fields.slug}>
                        <StyledLink
                          to={office.node.fields.slug}
                          className="navbar-item"
                        >
                          {office.node.frontmatter.location}
                        </StyledLink>
                      </li>
                    )
                  })}
                </Ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

export const pageQuery = graphql`
  query FooterTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "office-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            location
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
