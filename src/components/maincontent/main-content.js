import React, { Component, Fragment } from 'react';
import { Line, Bar, defaults } from 'react-chartjs-2';
import MainSmall from './main-content-small';
import './main-content.scss';

defaults.global.defaultFontColor = '#adb7be';
defaults.global.defaultFontFamily = "Raleway', sans-serif";
class MainContent extends Component {
    state = {
        isSmall: window.innerWidth < 768
    } 

    handlePageSize = () => {
        this.setState({
            isSmall: window.innerWidth < 768
        })
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handlePageSize)
     }
    
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handlePageSize)
    }

    render() {
        let countryData = this.props.countryData;
        let toggleState = this.props.toggleState;

        console.log('SIIIZE', this.state.isSmall)

        const ethnicData = {
            labels: countryData ? countryData.ethnic : null,
            datasets: [
                {
                    label: 'Ethnic Groups %',
                    fill: true,
                    backgroundColor: 'rgb(255, 100, 145, 0.7)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: countryData ? countryData.ethnicData : null
                }
            ]
        };

        const citiesPopulation = {
            labels: countryData ? countryData.cities : null,
            datasets: [
                {
                    label: 'Top Populated Cities',
                    fill: true,
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: countryData ? countryData.citiesPopulation : null
                }
            ]
        };

        const temperatureData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Average Monthly Temperature (Celsius)',
                    fontColor: 'rgba(248,248,255, 1)',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    // pointBorderColor: '#ba54f5',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 5,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    options: {
                        maintainAspectRatio: false
                    },
                    data: countryData ? countryData.temperature : null
                }
            ]
        };

       

        return (
            <Fragment>
                {(!this.state.isSmall && countryData) && < div className = "main-content" >
                <div className="details-button">
                    <button onClick={toggleState}className="responsive-button-main">Regions Menu</button>
                    <div className="country-details">
                        <p><b>Country: </b>{countryData.country}</p>
                        <p><b>Capital: </b>{countryData.capital}</p>
                        <p><b>Population: </b>{countryData.population}</p>
                        <p><b>Size: </b>{countryData.size}</p>
                    </div>
                </div>
                <p className="temp-text">Temperature</p>
                <div className="temperature">
                    <Line data={temperatureData} height={80} />
                </div>
                <div className="ethnic-religion">

                    <div className="religion">
                        <p>Religion</p>
                        <div className='religion-content'>
                            <div className="christian">
                                <div className="text-and-bar">
                                <p className="christian-text">{countryData.religion[0].name}</p>
                                    <div className="progress-bar">
                                        <div style={{ width: countryData.religion[0].size }} className="progress-christian christian-color"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="christian">
                                <div className="text-and-bar">
                                        <p className="islam-text">{countryData.religion[1].name}</p>
                                    <div className="progress-bar">
                                        <div style={{ width: countryData.religion[1].size }} className="progress-islam"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="christian">
                                <div className="text-and-bar">
                                        <p className="other-text">{countryData.religion[2].name}</p>
                                    <div className="progress-bar">
                                        <div style={{ width: countryData.religion[2].size }} className="progress-other"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tribes">
                        <p>Top 3 Tribes</p>
                        <div className="tribe-sections">
                            <div className="common">
                                <div className="tribe-one">
                                    <div className="icon">
                                        <div className="icon-one">
                                            <i className="fa fa-user-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="ethnic-data">
                                        <p className="tribe-name">{countryData.threeEthnic[0].name}</p>
                                        <p>{countryData.threeEthnic[0].percent}</p>
                                    </div>
                                </div>
                                <div className="tribe-type">{countryData.threeEthnic[0].group}</div>
                            </div>

                            <div className="common">
                                <div className="tribe-one">
                                    <div className="icon">
                                        <div className="icon-one two">
                                            <i className="fa fa-user-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="ethnic-data">
                                        <p className="tribe-name">{countryData.threeEthnic[1].name}</p>
                                        <p>{countryData.threeEthnic[1].percent}</p>
                                    </div>
                                </div>
                                <div className="tribe-type">{countryData.threeEthnic[1].group}</div>
                            </div>

                            <div className="common">
                                <div className="tribe-one">
                                    <div className="icon">
                                        <div className="icon-one three">
                                            <i className="fa fa-user-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="ethnic-data">
                                        <p className="tribe-name">{countryData.threeEthnic[2].name}</p>
                                        <p>{countryData.threeEthnic[2].percent}</p>
                                    </div>
                                </div>
                                <div className="tribe-type">{countryData.threeEthnic[2].group}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <p>Population and Ethnic Groups</p>
                    <div className="bar-graphs">
                        <div className="bar-one">
                            <Bar data={ethnicData} />
                        </div>
                        <div className="bar-two">
                            <Bar data={citiesPopulation} />
                        </div>
                    </div>
                </div>
                </div >}
                {!countryData &&
                    <div className="main-content">
                        <button onClick={toggleState} className="responsive-button-main">Regions Menu</button>
                        <p>Thank you for visiting :) My data is currently being gathered.</p>
                    </div>
                }
                {(this.state.isSmall && countryData) && <div className="main-content"><MainSmall toggleState={this.props.toggleState} countryData={countryData}/></div>}
            </Fragment>
        )
        
    }
}

export default MainContent;

