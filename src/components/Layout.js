import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>      
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
