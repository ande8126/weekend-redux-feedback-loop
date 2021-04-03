import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const ConfirmSubmit = () => {
    const dispatch = useDispatch()

    const clearSurvey = () =>{
        dispatch({ type: 'clearSurvey' })
    }

    return (
        <>
            <div>
                <h2>Feedback!</h2>
            </div>
            <div>
                <h3>Thank You!</h3>
                <Link to = "/">
                    <button onClick={clearSurvey}>Leave New Feedback</button>
                </Link>
            </div>
        </>
    )
}

export default ConfirmSubmit
