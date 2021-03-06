import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import ContactIcon from '../components/ContactIcon/ContactIcon'

const ContactPage = () => {
    return (
        <Layout view='contact'>
            <Head view='contact' title='Contact' />
            <h1>Contact</h1>
            <button>Let's Make a Website (Clients)</button>
            <button>Let's Get you a job, young lad (Employers)</button>

            <ContactIcon />
        </Layout>
    )
}

export default ContactPage