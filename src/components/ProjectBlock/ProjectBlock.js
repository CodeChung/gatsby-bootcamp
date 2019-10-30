import React from 'react'


class ProjectBlock extends React.Component {
    state = {
        index: 0,
        projects: [],
    }
    render() {
        const { index, blocks } = this.props
        const project = blocks[index]
        return (
            <div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div>
        )
    }
}

export default ProjectBlock