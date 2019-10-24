import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

import indexStyles from './index.module.scss'

const IndexPage = () => {
    return (
        <Layout view='home' className={indexStyles.index}>
            <Head view='home' title='Home' />
            <h1>Hi there.</h1>
            <h2>I'm Harry, a full-stack web developer with a passion for making exciting websites.</h2>
            <button>Let's build a website</button> | <button>I want to hire you</button>
        </Layout>
    )
}

export default IndexPage