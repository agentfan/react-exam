import React from 'react';
import { StylesProvider, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0.5rem',
        '& button': {
            width: '100%'
        }
    }
});

function AddBoard({setBoards}) {
    const classes = useStyles();

    const handleClick = ()=> {

    }

    return (
        <div className={classes.root}>
            <button onClick={handleClick}>Add Board</button>
        </div>
    );
}

export default AddBoard;