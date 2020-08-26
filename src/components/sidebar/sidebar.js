import React, { Component } from 'react';
import Region from '../region/region';
import './sidebar.scss';

class SideBar extends Component {
  render() {
    return (
      <div
        id="side-panel"
        className={this.props.toggle ? 'section-1-toggle' : 'section-1'}
      >
        <p className="africa-regions"> Africa Regions</p>
        <button
          className="sidebar-button"
          id="button"
          onClick={this.props.toggleState}
        >
          Close Menu
        </button>
        <Region
          selectCountry={this.props.selectCountry}
          name={'EASTERN AFRICA'}
          selector={'eastern-africa'}
        />
        <Region
          selectCountry={this.props.selectCountry}
          name={'SOUTHERN AFRICA'}
          selector={'southern-africa'}
        />
        <Region
          selectCountry={this.props.selectCountry}
          name={'CENTRAL AFRICA'}
          selector={'central-africa'}
        />
        <Region
          selectCountry={this.props.selectCountry}
          name={'NORTHERN AFRICA'}
          selector={'northern-africa'}
        />
        <Region
          selectCountry={this.props.selectCountry}
          name={'WESTERN AFRICA'}
          selector={'western-africa'}
        />
      </div>
    );
  }
}

export default SideBar;
