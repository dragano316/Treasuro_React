import React from 'react';


const member=(props)=>{
    return(
        <div className="p1">
            <span>{props.index}</span>
            <span>{props.fname} {props.lname}</span>
            <span>{props.score}</span>
        </div>
    );
}


export default member;