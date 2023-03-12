import React from "react";
import CommentForm from "./Comment-form";
import CommentAnalysisStat from "./Comment-sent-ana-stat";
import AllComments from "./Comment-the_comments";

export default function Comment(props) {
    
    // const [total_comment, setTotal_comment] = useState(0)

    return(
        <>
            <CommentAnalysisStat com_stat={props.com_stat} />
            <AllComments the_comments={props.the_comments} the_sentiments_array={props.sentiment_array} />
            <CommentForm post_id={props.post_id} onNewComment={() => props.onNewComment()} />
        </>
    )
}

