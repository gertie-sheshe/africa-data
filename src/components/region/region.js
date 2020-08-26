import React, { Component, Fragment } from 'react';
import regionData from '../../data/region-data';
import './region.scss';

class Region extends Component {
  state = {
    display: false,
  };

  toggleDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    return (
      <div className="ea-countries-list">
        <button onClick={this.toggleDisplay} className="region-button">
          {this.props.name}
        </button>
        {this.state.display && (
          <ul>
            {regionData[this.props.selector].map((data, index) => (
              <Fragment key={index}>
                <li onClick={() => this.props.selectCountry(data)}>{data}</li>
              </Fragment>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Region;
