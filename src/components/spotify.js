import React from "react"

const SpotifyPlaylist = () => {
  return (
    <iframe
      title="breetreedmusic"
      style={{ flexGrow: 1, minHeight: 600}}
      src="https://open.spotify.com/embed/playlist/6tYNc2HoG4Fs5IJvWL6MDk&theme=white"
      width="100%"
      height="100%"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  )
}

export default SpotifyPlaylist
