import React, {useState, useEffect} from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Comment from "./comments/Comment";

function BlogDetail() {

    let {post_id} = useParams();
    
    const url = `http://localhost:8000/api/post/${post_id}`;

    const [post, setPost] = useState(null)
    const [total_comment, setTotal_comment] = useState(0)
    useEffect(()=>{
        axios.get(url)
        .then(response =>{
            setPost(response.data)
        })
    }, [url, total_comment])


    if(post == null){
        return(
            <>
            </>
        )
    }
    return(
        <>
            <div className="mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="single-article-section">
                                        <div className="single-article-text">
                                            <h1>{post.title}</h1>
                                            <p className="blog-meta">
                                                <span className="author"><i className="fas fa-user"></i> Admin</span>
                                                <span className="date"><i className="fas fa-calendar"></i> Post creation date  </span>
                                            </p>
                                            <p className='text-justify'>
                                                {post.content}
                                            </p>
                                        </div>
                                    
                                    <div className="comments-list-wrap">
                                        <Comment 
                                            the_comments={post.comments} 
                                            com_stat={post.custom_field.comment_stats}
                                            post_id = {post.id}
                                            onNewComment = {() => setTotal_comment( total_comment + 1)}
                                        />
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
}

export default BlogDetail