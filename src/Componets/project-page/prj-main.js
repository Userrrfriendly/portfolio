import React from 'react';
import PrjHeader from './proj-header';
import PropTypes from 'prop-types';
import './css/prj-main.css';
import PrjDetails from './prj-details';
import Chart from './prj-chart';

class PrjMain extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="prj-pg-container">
                <PrjHeader
                    data={this.props.data}
                    title={this.props.title}
                />
                <main id="prj-main">
                    <PrjDetails data={this.props.data} />
                    <aside className="prj-pg-aside">
                        <h2>Overview</h2>
                        <p>Technologies/frameworks:</p>
                        <div className="chart-container">
                            <Chart
                                data={this.props.data.chartData}
                                options={this.props.data.chartOptions}
                            />
                        </div>
                    </aside>
                </main>
            </div>

        )
    }
}

export default PrjMain;