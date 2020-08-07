import React, { Component } from 'react';
import './sidebar.scss';

class SideBar extends Component {
 
  render() {
    return (
      <div id="side-panel" className={this.props.toggle ? 'section-1-toggle' : 'section-1'}>
        <p> Side Bar Content</p>
        <div>Example Text</div>
        <button id="button" onClick={this.props.toggleState}>close me</button>
      </div>
    )
  }
}

export default SideBar;
