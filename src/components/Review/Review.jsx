import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const Review = () => {
    //useSelecter to bring in survey object from Redux
    const survey = useSelector( ( store )=>{
        return store.surveyReducer
    })

    const sendResults = () =>{
        console.log( 'in sendResults');
        axios.post( '/feedback', survey ).then( ( response )=>{
            console.log( 'back from POST with response:', response );
        }).catch( ( err )=>{
            console.log( err );
            alert( 'error in POST', err );
        })
    }

    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {survey.feeling}</p>
            <p>Understanding: {survey.understanding}</p>
            <p>Support: {survey.support}</p>
            <p>Comments: {survey.comments}</p>
            <br />
            <Link to="/comments">
                <Button variant="contained">Back</Button>
            </Link>
            <Link to = "/submitted">
                <Button variant="contained" onClick={sendResults}>Submit</Button>
            </Link>
        </>
    )
}

export default Review
