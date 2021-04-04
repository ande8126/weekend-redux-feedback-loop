import React from 'react'
import { Typography } from '@material-ui/core';

const Header = () => {
    return (
        <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
            <Typography variant="h5" component="h2">
                Don't forget it!
            </Typography>
        </header>
    )
}

export default Header
