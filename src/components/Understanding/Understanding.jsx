import { useDispatch } from 'react-redux';
import { useState, setState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';


const Understanding = () => {
    //variable to bring in dispatch
    const dispatch = useDispatch();

    //local state to hold score temporarily
    const [ understandingScore, setUnderstandingScore ] = useState('');

    //function to handle score submission
    const handleUnderstanding = (event) =>{
        let number = Number( event.target.value );
        setUnderstandingScore( number );
    }//end handleUnderstanding
    
    //use dispatch to send understandingScore to redux object
    const sendUnderstanding = ( score )=>{
        if( score > 5  || score < 1 ){
            alert('Please Enter a value between 1-5')
            setUnderstandingScore('');
            window.location.reload();
        }
        else{
            dispatch({ type: 'sendUnderstanding', payload: score })
        }
    }
    
    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <input value={understandingScore} type="number" onChange={handleUnderstanding}/>
                <Link to="/support">
                <button onClick={() => sendUnderstanding (understandingScore )}>Next</button>
                </Link>
        </>
    )
}

export default Understanding
