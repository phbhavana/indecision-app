import {useState} from 'react';
const example = () => {
    const [State,setState]=useState("Hello");
    return 
    <h1>{State}</h1>
}