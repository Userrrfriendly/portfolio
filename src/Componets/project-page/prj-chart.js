import React from 'react';
import {Doughnut, Pie} from 'react-chartjs-2';
import './css/prj-chart.css';

class Chart extends React.Component {
    render() {
        return(
            <Pie width={600} height={600} data={this.props.data} options={this.props.options}/>
        )
    }
}

export default Chart;