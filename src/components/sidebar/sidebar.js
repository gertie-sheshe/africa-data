import React, { Component } from 'react';
import './sidebar.scss';

class SideBar extends Component {
 
  render() {
    return (
      <div id="side-panel" className={this.props.toggle ? 'section-1-toggle' : 'section-1'}>
        <p> Africa Data</p>
        <button className="sidebar-button" id="button" onClick={this.props.toggleState}>close me</button>

        <button className="region-button">EAST AFRICA</button>
        <div className="ea-countries-list">
          <ul>
            <li>Kenya</li>
            <li onClick={() => this.props.selectCountry('uganda')}>Uganda</li>
            <li>Tanzania</li>
          </ul>
        </div>

        <button className="region-button">SOUTH AFRICA</button>
        <div className="ea-countries-list">
          <a href="none.com">Kenya</a>
          <a href="none.com">Rwanda</a>
          <a href="none.com">Tanzania</a>
        </div>

        <button className="region-button">NORTH AFRICA</button>
        <div className="ea-countries-list">
          <a href="none.com">Kenya</a>
          <a href="none.com">Rwanda</a>
          <a href="none.com">Tanzania</a>
        </div>

        <button className="region-button">WEST AFRICA</button>
        <div className="ea-countries-list">
          <a href="none.com">Kenya</a>
          <a href="none.com">Rwanda</a>
          <a href="none.com">Tanzania</a>
        </div>

        <button className="region-button">CENTRAL AFRICA</button>
        <div className="ea-countries-list">
          <a href="none.com">Kenya</a>
          <a href="none.com">Rwanda</a>
          <a href="none.com">Tanzania</a>
        </div>

        <button className="region-button">AFRICAN ISLANDS</button>
        <div className="ea-countries-list">
          <a href="none.com">Kenya</a>
          <a href="none.com">Rwanda</a>
          <a href="none.com">Tanzania</a>
        </div>
      </div>
    )
  }
}

export default SideBar;
