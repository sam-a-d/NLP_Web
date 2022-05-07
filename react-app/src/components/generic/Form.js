import React from "react";

function SentimentAnalysisForm() {
    return(

        <>
            <div className="row d-flex justify-content-center senti-form">
				<div className="text-center">
					<div className="hero-text">
						<div className="hero-text-tablecell">
							<p className="subtitle">Analyse</p>
							<h2 className="text-success">All of your bengali sentiment</h2>
							<div className="hero-btns">
								<form>
                                <div className="form-group">
                                    <label for="comment">Your Sentiment:</label>
                                    <textarea className="text-success form-control" rows="3" id="comment"></textarea>
                                </div>
                                    <button className="btn btn-success" type="Submit">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>

    )
}

export default SentimentAnalysisForm