import React from 'react'
import Layout from '../components/layout'

import projectsStyles from './projects.module.scss'

const Projects = () => {
    return (
        <Layout className={projectsStyles.projectList} view='projects' title='Projects' >
            Projects List
        </Layout>
    )
}

export default Projects