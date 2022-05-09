import React from "react";

export default function CommentForm(params) {
    return(
        <>
            <div className="comment-template">
                <h4>Leave a comment</h4>
                <form>
                    
                    <input type="hidden" name="next" value="{{ request.get_full_path }}" />
                    <input type="hidden" name="post_id" value="{{ post.id }}" />

                    <p><textarea required name="comment" id="comment" cols="30" rows="10" placeholder="Your Comment"></textarea></p>
                    <p><input type="submit" value="Submit" /></p>
                </form>
            </div>
        </>
    )
}


