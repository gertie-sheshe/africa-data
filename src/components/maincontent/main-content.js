import React, { Component } from 'react';
import { Line, Bar, defaults} from 'react-chartjs-2';
import './main-content.scss';

defaults.global.defaultFontColor = '#adb7be';
defaults.global.defaultFontFamily = "Raleway', sans-serif";
console.log('DEFAULTS', defaults)
class MainContent extends Component {
    render() {
        const dataFour = {
            labels: ['Nairobi', 'Mombasa', 'Nakuru', 'Eldoret', 'Kisumu', 'Kisii', 'Naivasha', 'Machakos', 'Malindi', 'Bondo'],
            datasets: [
              {
                label: 'Top Populated Cities',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 76, 100, 86, 50]
              }
            ]
        };

        const dataThree = {
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
                        maintainAspectRatio : false
                      },
                data: [29, 25, 27, 26, 23, 21, 19, 20, 23, 24, 25, 26]
              }
            ]
        };

       

        return (
            <div className="main-content">
                <div className="country-details">Capital, Population, Size</div>
                <p className="temp-text">Temperature</p>
                <div className="temperature">
                    <Line data={dataThree} height={80}/>
                </div>
                <div className="ethnic-religion">

                    <div className="religion">
                        <p>Religion</p>
                        <div className='religion-content'>
                            <div className="christian">
                                <div className="text-and-bar">
                                    <p className="christian-text">Christian</p>
                                    <div className="progress-bar">
                                        <div className="progress-christian christian-color"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="christian">
                                <div className="text-and-bar">
                                    <p className="islam-text">Islam</p>
                                    <div className="progress-bar">
                                        <div className="progress-islam"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="christian">
                                <div className="text-and-bar">
                                    <p className="other-text">Other</p>
                                    <div className="progress-bar">
                                        <div className="progress-other"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tribes">
                        <p>Ethnicity</p>
                        <div className="tribe-sections">
                            <div className="tribe-one common">
                                <div className="icon">
                                    <div className="icon-one">
                                        <i class="fa fa-user-o" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="ethnic-data">
                                    <p className="tribe-name">Kikuyu</p>
                                    <p>40%</p>
                                </div>
                            </div>

                            <div className="tribe-one common">
                                <div className="icon">
                                    <div className="icon-one">
                                        <i class="fa fa-user-o" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="ethnic-data">
                                    <p className="tribe-name">Kikuyu</p>
                                    <p>40%</p>
                                </div>
                            </div>

                            <div className="tribe-one common">
                                <div className="icon">
                                    <div className="icon-one">
                                        <i class="fa fa-user-o" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="ethnic-data">
                                    <p className="tribe-name">Kikuyu</p>
                                    <p>40%</p>
                                </div>
                            </div>
                            {/* <div className="tribe-two common"></div>
                            <div className="tribe-three common"></div> */}
                        </div>
                    </div>
                </div>
                <div >
                    <p>Population and Tourism</p>
                    <div className="bar-graphs">
                        <div className="bar-one">
                            <Bar data={dataFour}/>
                        </div>
                        <div className="bar-two">
                            <Bar data={dataFour}/>
                        </div>
                    </div>
                </div>
                {/* <button onClick={this.props.toggleState}>Press Me</button>
                <h1>THIS IS THE MAIIIN CONTENT</h1> */}
             </div>
        )
    }
}

export default MainContent;





// import React from 'react';
// import { Pie, Line, Bar, HorizontalBar, defaults, Doughnut} from 'react-chartjs-2';
// import './main-content.scss';

// defaults.global.defaultFontColor = '#f3f2ed';

// const data = {
// 	labels: [
// 		'Nilotes',
// 		'Cushites',
// 		'Bantus'
// 	],
// 	datasets: [{
//         data: [30, 10, 60],
//         borderColor: '#4db6ac',
//         backgroundColor: [
//         '#00695c',
// 		'#80cbc4',
// 		'#0097a7',
// 		],
//         hoverBackgroundColor: [
//         '#00695c',
// 		'#80cbc4',
// 		'#a0097a7',
// 		]
// 	}]
// };

// const dataTwo = {
// 	labels: [
// 		'Hills',
// 		'Mountains',
// 		'Valleys'
// 	],
// 	datasets: [{
// 		data: [30, 500, 100],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		]
// 	}]
// };



// // const options = {
// //     plugins: {
// //         datalabels: {
// //             color: '#fff',
// //             display: true
// //         }
// //     }
// // }



// const dataFive = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'My First dataset',
//         backgroundColor: 'rgba(255,99,132,0.2)',
//         borderColor: 'rgba(255,99,132,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//         hoverBorderColor: 'rgba(255,99,132,1)',
//         data: [65, 59, 80, 81, 56, 55, 40]
//       }
//     ]
//   };

  
// const MainContent = () => (
//     <div className="section-2">
//         <div className="details">Capitale Popuation Size </div>
//         <div className="upper-section">
//             <div className="charts">
//                 <div className="chart-display">
//                     <Doughnut data={data}/>
//                 </div>
//                 <div className="chart-display">
//                     <Pie data={dataTwo}/>
//                 </div>
//             </div>
//             <div className="line-upper">
//                 <div>
//                     <Line data={dataThree} />
//                 </div>
//             </div>
//         </div>
//         <div className="lower-section">
//             <div className="bar-lower">
//                 <Bar data={dataFour} height={200}/>
//             </div>
//             <div className="line-lower">
//                 <div>
//                     <HorizontalBar data={dataFive} height={200}/>
//                 </div>
//             </div>
//         </div>
//     </div>
// )

// export default MainContent;
