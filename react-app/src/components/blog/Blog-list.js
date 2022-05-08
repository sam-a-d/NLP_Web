import React, {Component} from "react";
import BlogPagiantion from "./BlogPagination";
import {Link} from 'react-router-dom'

class BlogList extends Component{
    constructor(props){
        super(props)

        this.state = {
            posts : [],
            is_loaded : true,
        }
    }

    componentDidMount(){
        let url = 'http://localhost:8000/api/post-api/';

        fetch(url)
        .then(res => (res.json()))
        .then(data =>(
            this.setState({
                posts : data
            })
        ))
    }







render () {
    return(
        <>
            <div className="latest-news mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        {this.state.posts.map (
                            post =>
                            
                            <div className="col-lg-4 col-md-6" key={post.id}>
                                <div className="single-latest-news">
                                    <a href="/"><div className="latest-news-bg news-bg-1"></div></a>
                                    <div className="news-text-box">
                                        <h3><a href="/">{post.title}</a></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user"></i> Admin</span>
                                            <span className="date"><i className="fas fa-calendar"></i> Post date </span>
                                        </p>
                                        <p className="excerpt"></p>
                                        <Link to={`/article/${post.id}`}>
                                            <span className="read-more-btn">read more <i className="fas fa-angle-right"></i></span>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                    <BlogPagiantion />
                    
                </div>
            </div>
            
        </>
    )
}
}
export default BlogList