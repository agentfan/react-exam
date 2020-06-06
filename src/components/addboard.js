import React from 'react';
import { makeStyles} from '@material-ui/core';
import onAddBoard from '../utils/onAddBoard';

const useStyles = makeStyles({
    root: {
        width: '300px',
        padding: '0',
        margin: '0.5rem',
        '& button': {
            padding: '0.25rem',
            width: '100%'
        }
    }
});

function AddBoard({state}) {
    const classes = useStyles();

    const handleClick = ()=> {
        onAddBoard(state);
    }

    return (
        <div className={classes.root}>
            <button onClick={handleClick}>Add Board</button>
        </div>
    );
}

export default AddBoard;