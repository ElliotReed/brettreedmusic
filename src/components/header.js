import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.css"

const Navbar = () => {
  return (
    <nav>
      <ul className={headerStyles.navUl}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/scores">Scores</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
        <li><Link to="/production">Production</Link></li>
      </ul>
    </nav>
  )
}

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.logoWrapper}>
      <h1 className={headerStyles.logo}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
