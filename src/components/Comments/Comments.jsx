import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Comments = () => {
    //bring in dispatch
    const dispatch = useDispatch();

    //local state to hold comment temporarily
    const [ comments, setComments ] = useState('');

    //function to handle comment submission
    const handleComments = (event) =>{;
        setComments(event.target.value)
    }//end handleComments
    
    //use dispatch to send comment to redux object
    const sendComments = ( string )=>{
        dispatch({ type: 'sendComments', payload: string })
    }

    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <input value={comments} type="text" onChange={handleComments}/>
            <Link to="/review">
                <button onClick={() => sendComments( comments )}>Next</button>
            </Link>
        </>
    )
}

export default Comments
