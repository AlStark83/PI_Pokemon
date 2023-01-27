import React from 'react';

export default function Card({id, name, img, types}){
    return(
        <div
        key={id}>
        <h3>{name}</h3>
        <h5>{types}</h5>
        <img src={img} alt="not found" />
        </div>
    )
}