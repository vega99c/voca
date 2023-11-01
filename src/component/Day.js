//Day.js
// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day(){
    const obj = {
        num : '2',        
    };
    console.log('good' , typeof(obj));
    console.log(useParams());
    const { day } = useParams();
    console.log(typeof(day));
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {words.map(word =>(                    
                    <Word word={word} key={word.id}/>
                ))}            
            </tbody>
        </table>
        </>
    );
}