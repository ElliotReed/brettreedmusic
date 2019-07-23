import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import TwitterTimeline from "../components/twitter"
import SpotifyPlaylist from "../components/spotify"

import indexStyles from "./index.module.css"

const IndexPage = () => (
  <Layout hero="true">
    <SEO title="Home" />
    <div className={indexStyles.widgetContainer}>
      <SpotifyPlaylist />
      <TwitterTimeline />
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
