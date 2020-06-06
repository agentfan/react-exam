import React from 'react';
import { StylesProvider, makeStyles } from '@material-ui/core';
import onTextChanged from '../utils/onTextChanged';
import onDelTask from '../utils/onDelTask';

const useStyles = makeStyles({
    task: {
        padding: '0.25rem 0.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 2rem',
        backgroundColor: 'white',
        borderBottom: '1px solid grey',
        '& div:first-child': {
            '& input': {
                width: 'calc(100% - 0.5rem)',
                fontSize: '1rem',
                backgroundColor: 'transparent',
                border: 'none'
            }
        },
        '& div:last-child': {
            '& button':{
                width: '100%',
                backgroundColor: 'rgba(255,0,0,0.5)',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                borderRadius: '0.25rem'
            }
        }
    }
});

const Task = ({ board, task, state }) => {
    const [text, setText] = React.useState(task.text);

    const classes = useStyles();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleBlur = () => {
        onTextChanged(board, task.id, text, state);
    }

    const handleDelTask = () => {
        onDelTask(board, task.id, state);
    }

    return (
        <div className={classes.task}>
            <div>
                <input type="text" onChange={handleChange} onBlur={handleBlur} value={text} />
            </div>
            <div>
                <button onClick={handleDelTask}>X</button>
            </div>
        </div>
    );
}

export default Task;