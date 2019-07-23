import React from "react"

const TwitterTimeline = () => {
  return (
    <div style={{flexGrow: 1}}>
        <a
          className="twitter-timeline"
          data-height="600px"
          data-theme="light"
          data-link-color="#E95F28"
          href="https://twitter.com/brettreedmusic"
        >
          Tweets by brettreedmusic
        </a>
        {/* <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
    </div>
  )
}

export default TwitterTimeline
