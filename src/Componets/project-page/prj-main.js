import React from 'react';
import PrjHeader from './proj-header';
import PropTypes from 'prop-types';
import './css/prj-main.css';
import PrjDetails from './prj-details';

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
                    <aside className="temp-aside"> I am a temporary aside</aside>
                    <PrjDetails data={this.props.data} />
                </main>
            </div>

        )
    }
}

export default PrjMain;