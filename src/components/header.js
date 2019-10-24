import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FiCoffee, FiHome,  } from 'react-icons/fi'

import headerStyles from './header.module.scss'
import HoverIcon from './HoverIcon/hoverIcon'

const Header = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <h1>
                <AniLink paintDrip hex="#000000" className={headerStyles.title + ' ' + headerStyles[props.view]} to='/'>
                    {data.site.siteMetadata.title}
                </AniLink>
            </h1>
            <nav>
                <div className={headerStyles.hamburger} />
                <ul className={headerStyles.navList}>
                    <li><AniLink paintDrip duration={.87} hex="#000000" className={headerStyles.navItem + ' ' + headerStyles[props.view]} activeClassName={headerStyles.activeNavItem} to='/'><HoverIcon icon={<FiHome />} title='Home' /></AniLink></li>
                    <li><AniLink paintDrip duration={.87} hex="#71e355" className={headerStyles.navItem + ' ' + headerStyles[props.view]} activeClassName={headerStyles.activeNavItem} to ='/about'><HoverIcon title='About' /></AniLink></li>
                    <li><AniLink paintDrip duration={.87} hex="#00ffc6" className={headerStyles.navItem + ' ' + headerStyles[props.view]} activeClassName={headerStyles.activeNavItem} to ='/contact'><HoverIcon title='Contact' /></AniLink></li>
                    <li><AniLink paintDrip duration={.87} hex="#9db4f6" className={headerStyles.navItem + ' ' + headerStyles[props.view]} activeClassName={headerStyles.activeNavItem} to ='/blog'><HoverIcon title='Blog' /></AniLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header