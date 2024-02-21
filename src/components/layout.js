import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import Menu from './menu'
class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    const { children } = this.props
    console.log('State', this.state.counter)
    return (
      <>
        <Seo />
        <Navigation handleClick={this.handleClick} isToggleOn={this.state.isToggleOn } />
        <Menu handleClick={this.handleClick} isToggleOn={this.state.isToggleOn } />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
