import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Review = () => {
    //useSelecter to bring in survey object from Redux
    const survey = useSelector( ( store )=>{
        return store.surveyReducer
    })

    const sendResults = () =>{
        console.log( 'in sendResults');
        axios.post( '/')
    }

    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {survey.feeling}</p>
            <p>Understanding: {survey.understanding}</p>
            <p>Support: {survey.support}</p>
            <p>Comments: {survey.comments}</p>
            <Link to = "/submitted">
                <button onClick={sendResults}>Submit</button>
            </Link>
        </>
    )
}

export default Review
