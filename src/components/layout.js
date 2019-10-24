import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'


class Layout extends React.Component {
    state = {
        currentView: 'home',
        activeNav: false,
        
    }
    componentDidMount() {
        if (this.props.view) {
            this.setView({ currentView: this.props.view })
        }
    }
    setView = (view) => {
        this.setState({ currentView: view })
    }
    toggleNav = () => {
        this.setState({ activeNav: !this.state.activeNav })
    }
    render() {
        const { activeNav } = this.state
        return(
            <div className={`${layoutStyles.container} ${layoutStyles[this.props.view]}`}>
                <div className={layoutStyles.content}>
                    <Header 
                        active={activeNav}
                        view={this.props.view} 
                        setView={this.setView} 
                        toggleNav={this.toggleNav} />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}


export default Layout