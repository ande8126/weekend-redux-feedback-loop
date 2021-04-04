import { useDispatch } from 'react-redux';
import { useState, setState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import React from 'react';
import { Button, TextField }  from '@material-ui/core';


const Understanding = () => {
    //variable to bring in dispatch
    const dispatch = useDispatch();

    //variable to bring in useHistory
    const history = useHistory();

    //local state to hold score temporarily
    const [ understandingScore, setUnderstandingScore ] = useState('');

    //function to handle score submission
    const handleUnderstanding = (event) =>{
        let number = Number( event.target.value );
        setUnderstandingScore( number );
    }//end handleUnderstanding
    
    //use dispatch to send understandingScore to redux object
    const sendUnderstanding = ( score )=>{
        if( score > 5  || score < 1 || score === '' ){
            alert('Please Enter a value between 1-5')
            setUnderstandingScore( '' );
        }
        else{
            dispatch({ type: 'sendUnderstanding', payload: score })
            history.push( '/support' );
        }
    }
    
    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <TextField label="Understanding" helperText="Score 1-5" autoFocus={true} value={understandingScore} type="number" onChange={handleUnderstanding}/>
            <br />
            <Link to="/">
                <Button variant="contained">Back</Button>
            </Link>
            <Button variant="contained" onClick={() => sendUnderstanding (understandingScore )}>Next</Button>
        </>
    )
}

export default Understanding
