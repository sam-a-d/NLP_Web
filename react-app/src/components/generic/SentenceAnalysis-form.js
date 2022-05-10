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
    }


    handleSubmit(e){
        e.preventDefault();

        let url = 'http://localhost:8000/api/sentianalyze/';
        // const conf = {
        //     method : 'POST',
        //     headers : { 'Content-Type' : 'application/JSON' },
        //     body : JSON.stringify({
        //         "sentence": this.state.the_sentence
        //     })
        // }
  
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
        // console.log(this.state.the_result)
        // fetch(url, conf)
        // .then((response) => {
        //     response = response.json()
        //     console.log(response)
        // })
        // .then( (data) => this.setState({data}))
        // .catch( (err) => console.log(err))
        
        // console.log(this.state);
    }

    handleChange(e){
        this.setState({
            the_sentence : e.target.value,
            success : true
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
                                            rows="3" id="comment" required>
                                        </textarea>
                                    </div>
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
