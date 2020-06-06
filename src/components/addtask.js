import React from 'react';
import { makeStyles} from '@material-ui/core';
import onAddTask from '../utils/onAddTask';

const useStyles = makeStyles({
    root: {
        padding: '0.5rem',
        '& button': {
            width: '100%'
        }
    }
});

function AddTask({board, state}) {
    const classes = useStyles();

    const handleClick = ()=> {
        onAddTask(board, state);
    }

    return (
        <div className={classes.root}>
            <button onClick={handleClick}>add task</button>
        </div>
    );
}

export default AddTask;