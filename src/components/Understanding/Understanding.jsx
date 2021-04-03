import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Understanding = () => {
    //variable to bring in dispatch
    const dispatch = useDispatch();

    //local state to hold score temporarily
    const [ understandingScore, setUnderstandingScore ] = useState(1);

    //function to handle score submission
    const handleUnderstanding = (event) =>{;
        if( event.target.value > 5  || event.target.value < 1 ){
            alert('Please Enter a value between 1-5')
            setUnderstandingScore('')
        }//end limiter
        else{
            setUnderstandingScore(event.target.value)
        }//end set score
    }//end handleUnderstanding
    
    //use dispatch to send understandingScore to redux object
    const sendUnderstanding = ( score )=>{
        dispatch({ type: 'sendUnderstanding', payload: score })
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
