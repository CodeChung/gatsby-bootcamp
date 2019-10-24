import React from 'react'

import hoverIconStyles from './HoverIcon.module.scss'

const HoverIcon = (props) => {
    const active = props.view === props.title.toLowerCase() ? hoverIconStyles.openIcon : ''
    return (
        <div className={hoverIconStyles.icon + ' ' + (props.active && hoverIconStyles.activeIcons)}>
            <div className={hoverIconStyles.picture + ' ' + active }>
                {props.icon}
            </div>
            <div className={hoverIconStyles.text}>
                {props.title}
            </div>
        </div>
    )
}

export default HoverIcon