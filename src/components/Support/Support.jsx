import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
    //variable to bring in dispatch
    const dispatch = useDispatch();

    //local state to hold score temporarily
    const [ supportScore, setSupportScore ] = useState(1);

    //function to handle score submission
    const handleSupport = (event) =>{;
        if( event.target.value > 5  || event.target.value < 1 ){
            alert('Please Enter a value between 1-5')
            setSupportScore('')
        }//end limiter
        else{
            setSupportScore(event.target.value)
        }//end set score
    }//end handleSupport
    
    //use dispatch to send supportScore to redux object
    const sendSupport = ( score )=>{
        dispatch({ type: 'sendSupport', payload: score })
    }

    return (
        <>
            <h2>How well are you being supported?</h2>
            <input value={supportScore} type="number" onChange={handleSupport}/>
            <Link to="/comments">
                <button onClick={() => sendSupport( supportScore )}>Next</button>
            </Link>
        </>
    )
}

export default Support
