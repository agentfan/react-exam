import React from 'react';
import { StylesProvider, makeStyles} from '@material-ui/core';
import Task from './task';
import AddTask from './addtask';

const useStyles = makeStyles({
    board: {
        padding: '0',
        border: '1px solid grey',
        borderRadius: '0.25rem',
        margin: '0.5rem',
        backgroundColor: 'white'
    },
    title: {
        padding: '0.5rem',
        fontWaight: 'bold',
        textAlign: 'center',
        backgroundColor: 'brown',
        color: 'white'
    },
    task: {
        padding: '0.5rem',
        backgroundColor: 'white',
        '&:odd':{
            backgroundColor: 'grey',
            color: 'white'
        }
    }
});


function Board({board, state}) {
    const {id, title, tasks} = board;

    const classes = useStyles();

    return (
        <div className={classes.board}>
            <div className={classes.title}>{title}</div>
            {tasks.map( task => <Task key={task.id} board={id} task={task} state={state}/> )}
            <AddTask board={id} state={state}/>
        </div>
    );
}

export default Board;