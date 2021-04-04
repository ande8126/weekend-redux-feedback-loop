import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

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
            <TextField label="Comments" helperText="optional" autoFocus={true} value={comments} type="text" onChange={handleComments}/>
            <br />
            <Link to="/support">
                <Button variant="contained">Back</Button>
            </Link>
            <Link to="/review">
                <Button variant="contained" onClick={() => sendComments( comments )}>Next</Button>
            </Link>
        </>
    )
}

export default Comments
