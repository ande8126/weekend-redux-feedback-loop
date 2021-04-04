import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const Support = () => {
    //variable to bring in dispatch
    const dispatch = useDispatch();

    const history = useHistory();

    //local state to hold score temporarily
    const [ supportScore, setSupportScore ] = useState('');

    //function to handle score submission
    const handleSupport = (event) =>{;
        let number = Number( event.target.value );
        setSupportScore( number );
    }//end handleSupport
    
    //use dispatch to send supportScore to redux object
    const sendSupport = ( score )=>{
        if( score > 5  || score < 1 || score === '' ){
            alert( 'Please Enter a value between 1-5' )
            setSupportScore( '' );
        }//end limiter
        else{
            dispatch({ type: 'sendSupport', payload: score })
            history.push( '/comments' );
        }
    }

    return (
        <>
            <h2>How well are you being supported?</h2>
            <input value={supportScore} type="number" onChange={handleSupport}/>
            <button onClick={() => sendSupport( supportScore )}>Next</button>
        </>
    )
}

export default Support
