import React from "react";

export default function AllComments(props){
    return(
        <>
            <h3 className="comment-count-title"> Comments</h3>
            <div className="comment-list">             
                {props.the_comments.map(
                    comm =>
                    <div className="single-comment-body mb-2 p-2" key={comm.id}>
                        <div>
                            <p style={{'color': '#ff5e00'}}><strong>{comm.content}</strong></p>
                            <p className="comment-meta">By: Admin <span className="comment-date">on {comm.created} </span></p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

