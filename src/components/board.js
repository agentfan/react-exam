import React from 'react';
import { makeStyles } from '@material-ui/core';
import Task from './task';
import AddTask from './addtask';
import onDelBoard from '../utils/onDelBoard';
import onTitleChanged from '../utils/onTitleChanged';

const useStyles = makeStyles({
    board: {
        minWidth: '300px',
        padding: '0',
        border: '1px solid grey',
        borderRadius: '0.25rem',
        margin: '0.5rem',
        backgroundColor: 'white'
    },
    title: {
        display: 'grid',
        gridTemplateColumns: '1fr 2rem',
        padding: '0.5rem',
        fontWaight: 'bold',
        textAlign: 'center',
        backgroundColor: 'brown',
        color: 'white',
        '& div.title input': {
            border: 'none',
            backgroundColor: 'transparent',
            color: 'white',
            fontSize: '1rem',
            textAlign: 'center'
        }
    },
    task: {
        padding: '0.5rem',
        backgroundColor: 'white',
        '&:odd': {
            backgroundColor: 'grey',
            color: 'white'
        }
    },
    delbutton: {
        '& button': {
            width: '100%',
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: '0.25rem'
        }
    }
});

function Board({ board, state }) {
    const { id, title, tasks } = board;
    const classes = useStyles();
    const [text, setText] = React.useState(title);

    const handleDelTask = () => {
        onDelBoard(id, state);
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleBlur = () => {
        onTitleChanged(id, text, state);
    }

    return (
        <div className={classes.board}>
            <div className={classes.title}>
                <div className="title">
                    <input type="text" onChange={handleChange} onBlur={handleBlur} value={text}/>
                </div>
                <div className={classes.delbutton}>
                    <button onClick={handleDelTask}>X</button>
                </div>
            </div>
            {tasks.map(task => <Task key={task.id} board={id} task={task} state={state} />)}
            <AddTask board={id} state={state} />
        </div>
    );
}

export default Board;