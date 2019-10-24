import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'


class Layout extends React.Component {
    render() {
        return(
            <div className={`${layoutStyles.container} ${layoutStyles[this.props.view]}`}>
                <div className={layoutStyles.content}>
                    <Header view={this.props.view} />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}


export default Layout