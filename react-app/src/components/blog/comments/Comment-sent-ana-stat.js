import React from "react";

export default function CommentAnalysisStat(props){
    return(
        <>
            <div className="row">
                <div 
                    style={{width:`${props.com_stat.percent_positive}%`}} 
                    className="bg-success text-light text-center p-2">
                    <strong> {props.com_stat.percent_positive} %</strong> 
                </div>
                <div 
                    style={{width:`${props.com_stat.percent_neutral}%`}} 
                    className="bg-info text-light text-center p-2">
                    <strong> {props.com_stat.percent_neutral} %</strong> </div>
                <div 
                    style={{width:`${props.com_stat.percent_negative}%`}} 
                    className="bg-danger text-light text-center p-2">
                    <strong> {props.com_stat.percent_negative} %</strong> 
                </div>
                
            </div>
            
    
            <div className="row my-4">
                <p style={{width:'15px', height: '15px'}} className='bg-success'></p> &nbsp; Positive 
                <p style={{width:'15px', height: '15px'}} className='bg-info ml-4'></p> &nbsp; Neutral 
                <p style={{width:'15px', height: '15px'}} className='bg-danger ml-4'></p> &nbsp; Negative 
            </div>
        </>
    )
}

