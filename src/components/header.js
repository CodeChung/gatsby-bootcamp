import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FiCoffee, FiHome, FiFeather, } from 'react-icons/fi'
import { TiThumbsOk, TiPencil, } from 'react-icons/ti'
import { GiOldKing } from 'react-icons/gi'

import headerStyles from './header.module.scss'
import HoverIcon from './HoverIcon/hoverIcon'

// this is where I'm storing the icons for each page
const pageIcons = {
    home: <FiHome />,
    projects: <TiThumbsOk />,
    about: <GiOldKing />,
    blog: <FiFeather />,
    contact: <FiCoffee />,
}

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

    const { active, view } = props
    return (
        <header className={headerStyles.header}>
            <h1>
                <AniLink paintDrip hex="#000000" className={headerStyles.title + ' ' + headerStyles[props.view]} to='/'>
                    {data.site.siteMetadata.title} {view !== 'home' ? <span>/{view}</span> : ''}
                </AniLink>
            </h1>
            <nav>
                <button 
                    onClick={props.toggleNav}
                    className={headerStyles.currentIcon}>{pageIcons[view] || <TiPencil />}</button>
                <ul
                    onClick={() => {
                        if (!active) {
                            props.toggleNav()
                        }
                    }}
                    className={headerStyles.navList + ' ' + (active && headerStyles.navListActive)}>
                    <li className={headerStyles.ghostLink + (active && ' active')}><AniLink paintDrip duration={.87} hex="#000000" className={headerStyles.navItem + ' ' + headerStyles[props.view]} activeClassName={headerStyles.activeNavItem} to={`/${view}`}><HoverIcon active={active} view={view} icon={pageIcons.home} title='Home' /></AniLink></li>
                    <li><AniLink paintDrip duration={.87} hex="#000000" className={headerStyles.navItem + ' ' + headerStyles[props.view]} activeClassName={headerStyles.activeNavItem} to='/'><HoverIcon active={active} view={view} icon={pageIcons.home} title='Home' /></AniLink></li>
                    <li><AniLink paintDrip duration={.87} hex="#000000" className={headerStyles.navItem + ' ' + headerStyles[props.view]} activeClassName={headerStyles.activeNavItem} to='/projects'><HoverIcon active={active} view={view} icon={pageIcons.projects} title='Projects' /></AniLink></li>
                    <li><AniLink paintDrip duration={.87} hex="#71e355" className={headerStyles.navItem + ' ' + headerStyles[props.view]} activeClassName={headerStyles.activeNavItem} to ='/about'><HoverIcon active={active} view={view} icon={pageIcons.about} title='About' /></AniLink></li>
                    <li><AniLink paintDrip duration={.87} hex="#00ffc6" className={headerStyles.navItem + ' ' + headerStyles[props.view]} activeClassName={headerStyles.activeNavItem} to ='/contact'><HoverIcon active={active} view={view} icon={pageIcons.contact} title='Contact' /></AniLink></li>
                    <li><AniLink paintDrip duration={.87} hex="#9db4f6" className={headerStyles.navItem + ' ' + headerStyles[props.view]} activeClassName={headerStyles.activeNavItem} to ='/blog'><HoverIcon active={active} view={view} icon={pageIcons.blog} title='Blog' /></AniLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header