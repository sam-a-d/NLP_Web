import React from "react";
import CommentForm from "./Comment-form";
import CommentAnalysisStat from "./Comment-sent-ana-stat";
import AllComments from "./Comment-the_comments";

export default function Comment(props) {
    return(
        <>
            <CommentAnalysisStat com_stat={props.com_stat} />
            <AllComments the_comments={props.the_comments} />
            <CommentForm />
        </>
    )
}

