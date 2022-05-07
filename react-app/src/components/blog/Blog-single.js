import React, { Component } from "react";


class BlogSingle extends Component{
    constructor(props){
        super(props)
        this.state = {
            post : [],
            is_loaded : true
        }
    }

    componentDidMount(){
        let post_id = 1;
        let url = 'http://localhost:8000/api/post/' + post_id;
        fetch(url)
        .then(res => res.json())
        .then(data =>(
            this.setState({
                post : data
            })
        
        ))
        
    }

    
render(){
    return(
        <>
            <div className="mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                
                                <div className="single-article-section">
                                    {this.state.post.map(
                                        singlePost =>
                                        <div className="single-article-text">
                                            <h1>{singlePost.title}</h1>
                                            <p className="blog-meta">
                                                <span className="author"><i className="fas fa-user"></i> Admin</span>
                                                <span className="date"><i className="fas fa-calendar"></i> Post creation date  </span>
                                            </p>
                                            <p className='text-justify'>
                                               {singlePost.content}
                                            </p>
                                            
                                        </div>
                                    )}
                                            <div className="comments-list-wrap">
                                        <h3 className="comment-count-title"> Comments</h3>

                                        <div className="row mb-4">
                                            Sentiment Analysis Summary 
                                        </div>
                                        
                                        <div className="row mb-4">
                                            <p className='bg-success'></p> &nbsp; Positive 
                                            <p className='bg-info ml-4'></p> &nbsp; Neutral 
                                            <p className='bg-danger ml-4'></p> &nbsp; Negative 
                                        </div>
                                        

                                        <div className="comment-list">
                                            
                                            
                                            <div className="single-comment-body mb-2 p-2">
                                                <div className="comment-user-avater">
                                                    user avator
                                                </div>
                                                <div>
                                                    <p><strong>Comment</strong></p>
                                                    <p>By: Commenter <span className="comment-date">on Comment time </span></p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="comment-template">
                                        <h4>Leave a comment</h4>
                                        <form>
                                            
                                            <input type="hidden" name="next" value="{{ request.get_full_path }}" />
                                            <input type="hidden" name="post_id" value="{{ post.id }}" />

                                            <p><textarea required name="comment" id="comment" cols="30" rows="10" placeholder="Your Comment"></textarea></p>
                                            <p><input type="submit" value="Submit" /></p>
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar-section">
                                    <div className="recent-posts">
                                        <h4>Recent Posts</h4>
                                        <ul>
                                            <li><a href="/">You will vainly look for fruit on it in autumn.</a></li>
                                        
                                        </ul>
                                    </div>
                                    <div className="archive-posts">
                                        <h4>Archive Posts</h4>
                                        <ul>
                                            <li><a href="/">JAN 2019 (5)</a></li>
                                            
                                        </ul>
                                    </div>
                                    <div className="tag-section">
                                        <h4>Categories</h4>
                                        <ul>
                                            <li><a href="/">Politics</a></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
}}

export default BlogSingle