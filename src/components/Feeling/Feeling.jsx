import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import React from 'react';

const Feeling = () => {
    //variable to bring in dispatch
    const dispatch = useDispatch();

    //variable to bring in useHistory
    const history = useHistory();

    //local state to hold score temporarily
    const [ feelingScore, setFeelingScore ] = useState('');
    const [ numCheck, setNumCheck ] = useState( false );

    //function to handle score submission
    const handleFeeling = (event) =>{;
        let number = Number( event.target.value );
            setFeelingScore( number );
    }//end handleFeeling

    //use dispatch to send feelingScore to redux object
    const sendFeeling = ( score )=>{
        if( score > 5  || score < 1 || score === '' ){
            alert( 'Please Enter a value between 1-5' );
            setFeelingScore( '' );
        }//end limiter
        else{
            dispatch({ type: 'sendFeeling', payload: score });
            history.push( '/understanding' );
        }//end set score
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <input value={feelingScore} type="number" onChange={handleFeeling}/>
            <br />
            <button onClick={() => sendFeeling( feelingScore )}>Next</button>
        </>
    )
}

export default Feeling
