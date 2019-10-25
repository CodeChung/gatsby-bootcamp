import React from 'react'
import Layout from '../components/layout'
import WebButlerPhillips from '../components/WebButlerPhillips/WebButlerPhillips'

import butlerStyles from './butler.module.scss'

const Butler = (props) => {
    return (
        <Layout className={butlerStyles.page}>
            <WebButlerPhillips count={props.butlerCount} incrementCount={props.incrementCount} />
        </Layout>
    )
}

export default Butler