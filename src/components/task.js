import React from 'react';
import { makeStyles } from '@material-ui/core';
import onTextChanged from '../utils/onTextChanged';
import onDelTask from '../utils/onDelTask';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
    task: {
        padding: '0.25rem 0.5rem',
        display: 'grid',
        gridTemplateColumns: '2rem 1fr 2rem',
        backgroundColor: 'white',
        borderBottom: '1px solid grey',
        '& div.text': {
            '& input': {
                width: 'calc(100% - 1rem)',
                fontSize: '1rem',
                backgroundColor: 'transparent',
                border: 'none',
                padding: '0 0.5rem'
            }
        },
        '& div.button': {
            '& button':{
                width: '100%',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                borderRadius: '0.25rem'
            }
        },
        '& div.button.see': {
            '& a':{
                textDecoration: 'none'
            }
        },
        '& div.button.del': {
            '& button':{
                backgroundColor: 'rgba(125,0,0,0.5)',
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
            <div className='button see'>
                <Link to={`${board}/${task.id}`}>O</Link>
            </div>
            <div className="text">
                <input type="text" onChange={handleChange} onBlur={handleBlur} value={text} />
            </div>
            <div className='button del'>
                <button onClick={handleDelTask}>X</button>
            </div>
        </div>
    );
}

export default Task;