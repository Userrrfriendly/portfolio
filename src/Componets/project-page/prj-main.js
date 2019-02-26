import React from 'react';
import PrjHeader from './proj-header';
import PropTypes from 'prop-types';
import './css/prj-main.css';
import PrjDetails from './prj-details';
import Chart from './prj-chart';
import FunkyHeader from '../FunkyText/FunkyHeader';
import Ft from '../FunkyText/FunkyText';

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
                        <h2 className="prj-pg-h2" aria-label="Application Overview"><FunkyHeader text="Application Overview"/></h2>
                        <p aria-label="Build with:"><Ft>Build with:</Ft></p>
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