import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import * as headerStyles from "./header.module.css"

const Navbar = () => {
  return (
    <nav className={headerStyles.nav}>
      <ul className={headerStyles.navUl}>
        <li>
          <Link to="/" activeClassName={headerStyles.activeLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName={headerStyles.activeLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/music" activeClassName={headerStyles.activeLink}>
            Music
          </Link>
        </li>
        {/* <li><Link to="/scores" activeClassName={headerStyles.activeLink}>Scores</Link></li> */}
        <li>
          <Link to="/purchase" activeClassName={headerStyles.activeLink}>
            Purchase
          </Link>
        </li>
        <li>
          <Link to="/production" activeClassName={headerStyles.activeLink}>
            Production
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerInner}>
      <div className={headerStyles.logoWrapper}>
        <h1 className={headerStyles.logo}>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <Navbar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
