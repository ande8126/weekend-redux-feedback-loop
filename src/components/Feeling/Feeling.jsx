import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Feeling = () => {
    //variable to bring in dispatch
    const dispatch = useDispatch();

    //local state to hold score temporarily
    const [ feelingScore, setFeelingScore ] = useState(1);

    //function to handle score submission
    const handleFeeling = (event) =>{;
        if( event.target.value > 5  || event.target.value < 1 ){
            alert('Please Enter a value between 1-5')
            setFeelingScore('')
        }//end limiter
        else{
            setFeelingScore(event.target.value)
        }//end set score
    }//end handleFeeling
    
    //use dispatch to send feelingScore to redux object
    const sendFeeling = ( score )=>{
        dispatch({ type: 'sendFeeling', payload: score })
    }

    


    return (
        <>
            <h2>How are you feeling today?</h2>
            <input value={feelingScore} type="number" onChange={handleFeeling}/>
            <Link to="/understanding">
                <button onClick={() => sendFeeling( feelingScore )}>Next</button>
            </Link>
        </>
    )
}

export default Feeling
