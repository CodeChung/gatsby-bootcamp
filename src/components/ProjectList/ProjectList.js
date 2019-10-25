import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/scss/swiper.scss';

import projectListStyles from './ProjectList.module.scss'

class ProjectList extends React.Component {
    state = {
        index: 0,
        projects: [],
    }
    render() {
        const blogData = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)
        return (
            <div className={projectListStyles.list}>
                I'm a list
                <div className={projectListStyles.swiper}>
                    <Swiper>
                        <div className={projectListStyles.slide}>Slide #1</div>
                        <div className={projectListStyles.slide}>Slide #2</div>
                        <div className={projectListStyles.slide}>Slide #3</div>
                        <div className={projectListStyles.slide}>Slide #4</div>
                        <div className={projectListStyles.slide}>Slide #5</div>
                    </Swiper>
                </div>
            </div>
        )
    }
}

export default ProjectList