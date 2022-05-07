import React from "react";
import BlogPagiantion from "./BlogPagination";


function BlogList() {
    return(
        <>
            <div className="latest-news mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <a href="/"><div className="latest-news-bg news-bg-1"></div></a>
                                    <div className="news-text-box">
                                        <h3><a href="/">Title</a></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user"></i> Admin</span>
                                            <span className="date"><i className="fas fa-calendar"></i> Post date </span>
                                        </p>
                                        <p className="excerpt"></p>
                                        <a href="/" className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>

                    </div>

                    <BlogPagiantion />
                    
                </div>
            </div>
            
        </>
    )
}

export default BlogList