import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout view='about'>
            <Head title='About' view='about' />
            <h1>About</h1>
            <p>Hey I Harry. 
            I am a web developer. I love coding because there’s something exciting about bringing a project to life. And while it may be challenging at times, I’m always getting stronger and developing those programming muscles.
            <br />
            <br />
            I firmly beliebe that we can work together to create a web application we're both searching for.
            <br />
            <br />
            When I'm not coding, you can find me learning how to cook, playing the guitar, or practicing tae kwon do. Feel free to contact me or browse some of my projects.   
            <Link to='/contact'>Contact Me</Link></p>            
        </Layout>
    )
}

export default AboutPage