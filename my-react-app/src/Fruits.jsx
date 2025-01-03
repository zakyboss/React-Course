import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Fruits({fruitObj})
{
    let {name,calories}= fruitObj;
return (<>
    <h2>Name:{name}</h2>
     <span>Calories <b>{calories}</b></span>
    </>)
}