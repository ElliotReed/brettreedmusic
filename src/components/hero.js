import React from "react"

import * as  heroStyles from "./hero.module.css"

const Hero = () => {
  return (
    <div className={heroStyles.hero}>
      <div className={heroStyles.textWrapper}>
        <p>
          "doctor of percussive science, audio engineer, educator, improviser"
        </p>
      </div>
    </div>
  )
}

export default Hero
