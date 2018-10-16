import React from 'react';
import './css/prj-details.css';

class PrjDetail extends React.Component {
    render() {
        const data = this.props.data.content;

        return (
            <section className="prj-pg-details">
                <h2 className="prj-pg-h2">Project Details</h2>
                {data.map((article)=>{
                    return (
                        <article key={article.articleTitle} className="prj-pg-details-article">
                            <h3>{article.articleTitle}</h3>
                            {console.log(typeof(article.articleContent))}
                            {/* AFTER CORRECTING ALL THE PAGES REMOVE THE typeof */}
                            {typeof(article.articleContent) === 'object' ? article.articleContent : <p className="prj-pg-details-p">{article.articleContent}</p>}
                            {/* <p className="prj-pg-details-p">{article.articleContent}</p> ORIGINAL WAY*/}
                        </article>
                    )
                })}               
            </section>
        )
    }
}

export default PrjDetail;