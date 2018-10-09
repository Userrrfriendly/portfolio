import React from 'react';

class PrjDetail extends React.Component {
    render() {
        const data = this.props.data.content;

        return (
            <section className="prj-pg-details">
                <h2>Project Details</h2>
                {data.map((article)=>{
                    return (
                        <article key={article.articleTitle}>
                            <h3>{article.articleTitle}</h3>
                            <p>{article.articleContent}</p>
                        </article>
                    )
                })}               
            </section>
        )
    }
}

export default PrjDetail;