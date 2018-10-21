import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
import './css/prj-header.css';

class PrjHeader extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired
    };
    // static defaultProps = {
    //     title: 'No Title!'
    // };
    /**
     * path github
     * path livepage
     * img
     * 
     */
    render () {
        const data= this.props.data;
        return (
            <header className="prj-pg-header">
                <div className="prj-pg-header-title-container">
                    <h1>{this.props.title}</h1>
                    <div className="prj-pg-header-links-container">
                        {data.livePageUrl && <a href={data.livePageUrl}
                            target="_blank" rel="noopener noreferrer"
                            className="prj-pg-live-link">View App
                        </a>}
                        {data.sourceCodeUrl && <a href={data.sourceCodeUrl}
                            target="_blank" rel="noopener noreferrer"
                            className="prj-pg-source-link">View Code
                        </a>}
                    </div>
                </div>
                <div className="prj-pg-header-img-container">
                    <img src={data.imgUrl} alt="App screenshot" className="prj-pg-screenshot"/>
                </div>
            </header>
        )
    }
}

export default PrjHeader;