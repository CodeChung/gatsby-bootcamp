import React from 'react'

import projectCardStyles from './ProjectCard.module.scss'
import ProjectList from '../ProjectList'

const ProjectCard = (props) => {
    return (
        <div className={projectCardStyles.card}>
            <div className={projectCardStyles.img}>
                <img src={props.img} alt={props.title} />
            </div>
            <div className={projectCardStyles.title}>
                {props.title}
            </div>
        </div>
    )
}

export default ProjectCard