import React from 'react'

import hoverIconStyles from './HoverIcon.module.scss'

const HoverIcon = (props) => {
    return (
        <div className={hoverIconStyles.icon}>
            {props.icon} | {props.title}
        </div>
    )
}

export default HoverIcon