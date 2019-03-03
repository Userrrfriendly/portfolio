import React from 'react';
import './css/prj-details.css';
import FunkyHeader from '../FunkyText/FunkyHeader';

class PrjDetail extends React.Component {
    render() {
        return (
            <section className="prj-pg-details">
                <h2 className="prj-pg-h2" aria-label="Project Details"><FunkyHeader text="Project Details" /></h2>
                {this.props.data.content[0].articleContent}
            </section>
        )
    }
}

export default PrjDetail;