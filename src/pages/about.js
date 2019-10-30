import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

import aboutStyles from './about.module.scss'

const AboutPage = () => {
    return (
        <Layout view='about'>
            <Head title='About' view='about' />
            <h1>About</h1>
            <div className={aboutStyles.block}>
                <section>
                    <p>Hello, welcome to CodeChung.</p> 
                    <p>
                        My name is Harry. I am a web developer. I love coding because there’s something exciting about bringing a project to life. While it may be challenging at times, I’m always getting stronger and developing those programming muscles.
                    </p>
                    <p>
                        I firmly believe that we can work together to create a web application we're both searching for.
                    </p>
                    <p>
                        When I'm not coding, you can find me learning how to cook, playing the guitar, or practicing tae kwon do. Feel free to contact me or browse some of my projects.   
                    </p>
                    <p>
                        Looking to hire? <Link to='/contact'>Contact Me</Link>
                    </p>    
                </section>
                <section>
                    SkillSheet put in here later
                    Front End
                    Back End
                    Services
                </section>
            </div>
        </Layout>
    )
}

export default AboutPage