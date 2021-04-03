import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Review = () => {
    //useSelecter to bring in survey object from Redux
    const survey = useSelector( ( store )=>{
        store.surveyReducer
    })

    return (
        <>
            <p>{JSON.stringify(survey)}</p>
        </>
    )
}

export default Review
