import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'


class Layout extends React.Component {
    state = {
        currentView: 'home',
        activeNav: false,
        butlerCount: 0,
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
    triggerButler = () => {
        console.log('You rang, sire?')
    }
    incrementCount = () => {
        // this command triggers Mr. Phillip's conversation mode. 3rd times the charm.
        const { butlerCount } = this.state
        if (butlerCount === 2) {
            this.triggerButler()
            this.setState({ butlerCount: 0 })
        } else {
            this.setState({ butlerCount: butlerCount + 1 })
        }
    }
    render() {
        const { activeNav, butlerCount } = this.state
        return(
            <div className={`${layoutStyles.container} ${layoutStyles[this.props.view]}`}>
                <div className={layoutStyles.content}>
                    <Header 
                        active={activeNav}
                        view={this.props.view} 
                        setView={this.setView} 
                        toggleNav={this.toggleNav}
                        incrementCount={this.incrementCount}
                        butlerCount={butlerCount}
                        />
                    {this.props.children}
                </div>
                <Footer 
                    incrementCount={this.incrementCount}
                    butlerCount={butlerCount}
                    />
            </div>
        )
    }
}


export default Layout