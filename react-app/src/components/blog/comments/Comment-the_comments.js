import React from "react";

export default function AllComments(props){
    return(
        <>
           <div className="comment-list">
                                            
                {props.the_comments.map(
                    comm =>

                        <div className="single-comment-body mb-2 p-2">
                            
                            <div>
                                <p><strong>{comm.content}</strong></p>
                                <p className="comment-meta">By: Admin <span className="comment-date">on {comm.created} </span></p>
                            </div>
                        </div>
                )}
            </div>
        </>
    )
}

