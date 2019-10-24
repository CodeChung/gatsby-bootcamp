import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'
import WebButlerPhillips from './WebButlerPhillips/WebButlerPhillips'

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
            <p>Created by {data.site.siteMetadata.author}, © 2019 | Need help? Call for the web butler.</p>
            {/* <WebButlerPhillips className={footerStyles.butler}/> */}
        </footer>
    )
}

export default Footer