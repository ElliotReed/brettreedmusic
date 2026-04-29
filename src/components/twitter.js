import React from "react"

const TwitterTimeline = () => {
  return (
    <div style={{flexGrow: 1, minHeight: 600}}>
        <a
          className="twitter-timeline"
          data-height="600px"
          data-theme="light"
          data-link-color="#cc6599"
          href="https://twitter.com/brettreedmusic"
        >
          Tweets by brettreedmusic
        </a>
    </div>
  )
}

export default TwitterTimeline
