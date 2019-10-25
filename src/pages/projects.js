import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Swiper from 'react-id-swiper'
import projectsStyles from './projects.module.scss'
import ProjectBlock from '../components/ProjectBlock/ProjectBlock'



const Projects = () => {
    const [swiper, updateSwiper] = useState(null);
    const [index, updateIndex] = useState(0);

    const goNext = () => {
      if (swiper !== null) {
        console.log(swiper.activeIndex)
      }
    }
    const goPrev = () => {
      if (swiper !== null) {
        console.log(swiper.activeIndex)
      }
    }

    const swipeIndex = () => {
        updateIndex(swiper.activeIndex)
    }

    const projectData = useStaticQuery(graphql`
        query {
            allContentfulProject {
            edges {
                node {
                    title
                    description
                    demo
                    code
                    data {
                        tools
                    }
                }
            }
            }
        }
    `)
    const projects = projectData.allContentfulProject.edges.map(project => 
        <div 
            key={project.node.title} 
            className={projectsStyles.slide}
            style={ {
                background: `url(${project.node.image.file.url}) no-repeat center center`,
                'background-size': 'cover',
            } }
        >
            <div className={projectsStyles.blurb}>
                {project.node.title}
                {project.node.description}
            </div>
            <img alt='project screenshot' src={project.node.image ? project.node.image.file.url : 'https://placecage.com/600/900'} />
        </div>    
    )
    const blocks = projectData.allContentfulProject.edges.map(project => (
        { 
            title: project.node.title,
            description: project.node.description,
        }
    ))
    return (
        <Layout className={projectsStyles.projectList} view='projects' title='Projects' >
            <div onMouseUp={swipeIndex} className={projectsStyles.wrapper}>
                <ProjectBlock index={index} blocks={blocks}  />
                <div className={projectsStyles.listContainer}>
                    <div 
                        onMouseMoveCapture={swipeIndex}
                        onMouseLeave={swipeIndex}
                        className={projectsStyles.swiper}>
                        <Swiper getSwiper={updateSwiper}>
                            {projects}
                        </Swiper>
                    </div>
                    <img className={projectsStyles.mac} src='https://snipboard.io/Xosvjf.jpg' alt='mac end decoration'/>
                    <button onClick={goPrev}>Prev</button>
                    <button onClick={goNext}>Next</button>
                </div>
            </div>
            Under Construction
        </Layout>
    )
}

export default Projects