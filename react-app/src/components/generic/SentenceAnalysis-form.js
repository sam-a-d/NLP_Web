import React from "react";
import axios from "axios";

class SentenceAnalysisForm extends React.Component{

    constructor(props) {
      super(props)
    
      this.state = {
          'the_sentence' : '',
          'the_result' : '',
          'success' : false
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleClick = this.handleClick.bind(this)
    }


    handleSubmit(e){
        e.preventDefault();

        let url = 'http://localhost:8000/api/sentianalyze/';

        axios.post(url, {'sentence' : this.state.the_sentence})
        .then(
            response =>{
                this.setState({
                    'the_result' : response.data.sentiment_class,
                })
            }
        ).catch(
            error =>{
                console.log(error)
            }
        )

    }

    handleChange(e){
        this.setState({
            the_sentence : e.target.value,
            success : true
        })
    }
    handleClick(e){
        e.preventDefault()
        let url = 'http://localhost:8000/api/voice-to-text/'
        axios.get(url)
        .then(response=>{
            console.log(response.data)
            this.setState({
                'the_sentence' : response.data.voice_text
            })
        })
        
    }
    render(){
        return(
            <>
                <div className="row d-flex justify-content-center senti-form">
                    <div className="text-center">
                        <div className="hero-text">
                            <div className="hero-text-tablecell">
                                <p className="subtitle">Analyse</p>
                                <h2 className="text-success">All of your bengali sentiment</h2>
                                <div className="hero-btns">
                                    <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea onChange={this.handleChange} 
                                            className="text-center text-success form-control h4" 
                                            rows="3" id="comment" value={this.state.the_sentence} required>
                                        </textarea>
                                    </div>
                                        <button onClick={this.handleClick} className='btn-danger btn mr-2'><i className="fa fa-microphone" aria-hidden="true"></i></button>
                                        <button className="btn btn-success" type="Submit">Submit</button>
                                    </form>
                                </div>
                            
                            <h2 className="text-danger mt-4">{this.state.the_result}</h2>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SentenceAnalysisForm
