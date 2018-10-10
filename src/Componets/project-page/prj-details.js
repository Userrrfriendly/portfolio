import React from 'react';
import './css/prj-details.css';

class PrjDetail extends React.Component {
    render() {
        const data = this.props.data.content;

        return (
            <section className="prj-pg-details">
                <h2>Project Details</h2>
                {data.map((article)=>{
                    return (
                        <article key={article.articleTitle} className="prj-pg-details-article">
                            <h3>{article.articleTitle}</h3>
                            <p className="prj-pg-details-p">{article.articleContent}</p>
                        </article>
                    )
                })}               
            </section>
        )
    }
}

export default PrjDetail;