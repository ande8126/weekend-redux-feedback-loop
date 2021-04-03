import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Comments = () => {
    //bring in dispatch
    const dispatch = useDispatch();

    //local state to hold comment temporarily
    const [ comment, setComment ] = useState('');

    //function to handle comment submission
    const handleComment = (event) =>{;
        setComment(event.target.value)
    }//end handleComment
    
    //use dispatch to send comment to redux object
    const sendComment = ( string )=>{
        dispatch({ type: 'sendComment', payload: string })
    }

    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <input value={comment} type="text" onChange={handleComment}/>
            <Link to="/review">
                <button onClick={() => sendComment( comment )}>Next</button>
            </Link>
        </>
    )
}

export default Comments
