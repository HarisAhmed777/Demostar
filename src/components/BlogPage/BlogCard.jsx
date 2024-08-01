import React from 'react';
import './blogpage.css'

function BlogCard({ img, heading, para, date, read }) {
    console.log('hi')
    console.log('BlogCard props:', { img, heading, para, date, read });
    return (
        <div className="card blog-card">
            <img className="card-img-top" src={img} alt="Blog image" />
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <p className="card-text">{para}</p>
                <p>{date}</p>
                <a href="#" className="btn btn-primary curso">{read}</a>
            </div>
        </div>
    );
}

export default BlogCard;

