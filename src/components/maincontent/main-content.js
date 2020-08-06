import React from 'react';
import { Pie, Line, Bar, HorizontalBar} from 'react-chartjs-2';
import './main-content.scss';

const data = {
	labels: [
		'Nilotes',
		'Cushites',
		'Bantus'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const dataTwo = {
	labels: [
		'Hills',
		'Mountains',
		'Valleys'
	],
	datasets: [{
		data: [30, 500, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const dataThree = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80]
      }
    ]
};

const dataFour = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
};

  
const MainContent = () => (
    <div className="section-2">
        <div className="details">Capitale Popuation Size </div>
        <div className="upper-section">
            <div className="charts">
                <div className="chart-display">
                    <Pie data={data}/>
                </div>
                <div className="chart-display">
                    <Pie data={dataTwo}/>
                </div>
            </div>
            <div className="line-upper">
                <div>
                    <Line data={dataThree} />
                </div>
            </div>
        </div>
        <div className="lower-section">
            <div className="bar-lower">
                <Bar data={dataFour} height={200}/>
            </div>
            <div className="line-lower">
                <div>
                    <HorizontalBar data={dataThree} height={200}/>
                </div>
            </div>
        </div>
    </div>
)

export default MainContent;
