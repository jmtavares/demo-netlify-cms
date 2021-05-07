import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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

const NetworkIcon = styled.i`
  margin-right: 10px;
`

const Footer = () => {
  const { offices, socialLinks } = useStaticQuery(graphql`
    query FooterTemplate {
      offices: allMarkdownRemark(
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

      socialLinks: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "social-page" } } }
      ) {
        edges {
          node {
            frontmatter {
              label
              network_code
              href
            }
          }
        }
      }
    }
  `)

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
                  {offices.edges.map((office) => {
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
            <div className="column is-4">
              <section className="menu">
                <ColumnTitle>Social</ColumnTitle>
                <Ul className="menu-list">
                  {socialLinks.edges.map((social) => {
                    return (
                      <li key={social.node.frontmatter.label}>
                        <StyledLink
                          to={social.node.frontmatter.href}
                          className="navbar-item"
                        >
                          <NetworkIcon
                            className={`fab fa-lg fa-${social.node.frontmatter.network_code}`}
                          />

                          {social.node.frontmatter.label}
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
