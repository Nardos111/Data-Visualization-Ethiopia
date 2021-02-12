import React from 'react';
import {Polar} from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [
      33.8,
      29.3,
      6.2,
      5.9,
      2,
      2.2,
      2,
      1.7,
      1.7,
      1.5,
      1.3,
      1.1,
      8.1
    ],
    backgroundColor: [
      '#8dace7',
      '#4BC0C0',
      '#ef869e',
      '#E7E9ED',
      '#71deb9',
      '#ef869e',
      '#E7E9ED',
      '#71deb9',
      '#8dace7',
      '#4BC0C0',
      '#ef869e',
      '#E7E9ED',
      '#71deb9'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Oromo',
    'Amhara',
    'Somali',
    'Tigrinya',
    'Sidamo',
    'Wolayta',
    'Gurage',
    'Afar',
    'Hadiyya',
    'Gamo',
    'Gedeo',
    'Kafa',
    'Other Languages'
  ]
};

class PolarExample extends React.Component {

    render() {
        return (
            <div>
              <Polar data={data} />
            </div>
        )
    }
}

export default PolarExample;