import React from "react";

class CommentForm extends React.Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        post_id : this.props.post_id,
        the_comment: '',
        success: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        let url = 'http://localhost:8000/api/comments/'
        
        const conf = {
            method : 'POST',
            headers : { 'Content-Type' : 'application/JSON' },
            body : JSON.stringify({
                content: this.state.the_comment,
                post_id: this.state.post_id,
                commenter: 2
            })
        }

        fetch(url, conf)
        .then((response) => {
            response = response.json()
            })
        .then( (data) => this.setState({success: true, the_comment : ''}))
        .catch( (err) => console.log(err))
        
    }

    handleChange(e){
        this.setState({
            the_comment : e.target.value
        });
    }

    render(){
        return(
            <>
                <div className="comment-template">
                    <h4>Leave a comment</h4>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <textarea 
                                onChange={this.handleChange} 
                                required 
                                name="comment" id="comment" 
                                cols="30" rows="10" 
                                placeholder="Your Comment"
                                value={this.state.the_comment}
                            >
                            </textarea>
                        </p>

                        <p><input type="submit" value="Post Comment" /></p>
                    </form>
                </div>
            </>
        )
    }
}

export default CommentForm
