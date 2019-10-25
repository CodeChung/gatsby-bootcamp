import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.author}, © 2019 | Need help? Call for the web <AniLink to='/butler' paintDrip duration={.87} hex="#03fae9">butler</AniLink>.</p>
        </footer>
    )
}

export default Footer