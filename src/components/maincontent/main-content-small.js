import React, { Fragment } from 'react';
import './main-content-small.scss';

const MainSmall = ({ countryData, toggleState }) => (
  <div>
    <button onClick={toggleState} className="responsive-button">
      Regions Menu
    </button>
    <p className="feedback">
      To see more data visually displayed, visit site on desktop :)
    </p>
    <div className="country-data">
      <h1>{countryData.country}</h1>
      <h2>Country Details</h2>
      <p>
        <b>Capital: </b>
        {countryData.capital}
      </p>
      <p>
        <b>Population: </b>
        {countryData.population}
      </p>
      <p>
        <b>Size: </b>
        {countryData.size}
      </p>
    </div>
    <div>
      <h2>Top Three Tribes</h2>
      <div>
        {countryData.threeEthnic.map((data, index) => (
          <p key={index}>
            <b>{data.name} </b>
            {data.percent}
          </p>
        ))}
      </div>
    </div>
    <div>
      <h2>Top Populated Cities</h2>
      <div>
        {countryData.cities.map((city, index) => (
          <Fragment key={index}>
            <p>
              <b>{city} </b>
              {countryData.citiesPopulation[index]}
            </p>
          </Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default MainSmall;
