import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout view='about'>
            <Head title='About' view='about' />
            <h1>About</h1>
            <p>Hey I Harry. <Link to='/contact'>Contact Me</Link></p>            
        </Layout>
    )
}

export default AboutPage