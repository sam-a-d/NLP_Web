import React from "react";

export default function StatPortion(props){
    
    if(props.parcentage <= 0){
        return(
            <>
            </>
        )
    }
    return(
        <>
            <div 
                style={{width:`${props.parcentage}%`}} 
                className={`${props.cls} text-light text-center p-2`}>
                <strong> {props.parcentage} %</strong>
            </div>
        </>
    )
}

