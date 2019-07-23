import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>I am a musician, with great hair-lift</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage