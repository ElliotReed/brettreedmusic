import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.css"

const Navbar = () => {
  return (
    <nav>
      <ul className={headerStyles.navUl}>
        <li><Link to="/" activeClassName={headerStyles.active}>Home</Link></li>
        <li><Link to="/about" activeClassName={headerStyles.active}>About</Link></li>
        <li><Link to="/music" activeClassName={headerStyles.active}>Music</Link></li>
        {/* <li><Link to="/scores" activeClassName={headerStyles.active}>Scores</Link></li> */}
        <li><Link to="/purchase" activeClassName={headerStyles.active}>Purchase</Link></li>
        <li><Link to="/production" activeClassName={headerStyles.active}>Production</Link></li>
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
