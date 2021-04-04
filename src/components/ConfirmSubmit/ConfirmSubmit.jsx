import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';


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
                    <Button variant="contained" color="primary" onClick={clearSurvey}>Leave New Feedback</Button>
                </Link>
            </div>
        </>
    )
}

export default ConfirmSubmit
