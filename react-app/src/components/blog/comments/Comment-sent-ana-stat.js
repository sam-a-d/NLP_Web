import React from "react";
import StatPortion from "./Com-sent-ana-stat-pos";

export default function CommentAnalysisStat(props){
    return(
        <>
            <div className="row">   
                <StatPortion parcentage={props.com_stat.percent_positive} cls='bg-success' />
                <StatPortion parcentage={props.com_stat.percent_neutral} cls='bg-info' />
                <StatPortion parcentage={props.com_stat.percent_negative} cls='bg-danger' />                
            </div>
            
    
            <div className="row my-4">
                <p style={{width:'10px', height: '22px'}} className='bg-success'></p> &nbsp; Positive 
                <p style={{width:'10px', height: '22px'}} className='bg-info ml-4'></p> &nbsp; Neutral 
                <p style={{width:'10px', height: '22px'}} className='bg-danger ml-4'></p> &nbsp; Negative 
            </div>
        </>
    )
}

