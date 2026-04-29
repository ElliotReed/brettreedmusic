import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SpotifyPlaylist from "../components/spotify"

const MusicPage = () => (
  <Layout>
    <SEO title="Music" />
    <h1>Music</h1>
    <SpotifyPlaylist />
  </Layout>
)

export default MusicPage
