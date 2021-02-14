import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  datasets: [
    {
      label: 'Child Mortality (per 1000 children)',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
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
      data: [21.8947476835616, 20.0837964547624, 18.4603701466787, 16.9415111786822, 15.5651494741795, 14.3181453484042, 13.2655035395647, 12.4191451317631, 11.7403425300586, 11.1644735765227, 10.652389932278]
    }
  ]
};


class LineExample2 extends React.Component {

    render() {
        return (
            <div>
              <Line data={data} />
            </div>
        )
    }
}

export default LineExample2;