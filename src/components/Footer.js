import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

const Footer = ({ offices }) => {
  console.log(offices)

  return (
    <footer className="footer has-text-white-ter">
      <div className="content has-text-centered"></div>
      <div className="content has-text-centered has-text-white-ter">
        <div className="container has-text-white-ter">
          <div style={{ maxWidth: '100vw' }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/">
                      Form Examples
                    </Link>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="/admin"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  {offices.map((office) => {
                    return (
                      <li key={office.node.fields.slug}>
                        <Link
                          to={office.node.fields.slug}
                          className="navbar-item"
                        >
                          {office.node.frontmatter.location}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
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
