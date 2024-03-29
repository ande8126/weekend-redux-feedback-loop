import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ConfirmSubmit from '../ConfirmSubmit/ConfirmSubmit'

const Router = () => {
    return (
        <div>
            <HashRouter>
                <Route path ='/' exact>
                    <Feeling />
                </Route>
                <Route path = '/understanding' exact>
                    <Understanding />
                </Route>
                <Route path = '/support' exact>
                    <Support />
                </Route>
                <Route path = '/comments' exact>
                    <Comments />
                </Route>
                <Route path = '/review' exact>
                    <Review />
                </Route>
                <Route path = '/submitted' exact>
                    <ConfirmSubmit />
                </Route>                
            </HashRouter>
        </div>
    )
}

export default Router
