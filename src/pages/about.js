import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>Hey I Harry. <Link to='/contact'>Contact Me</Link></p>            
        </Layout>
    )
}

export default AboutPage