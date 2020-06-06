import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";

const useStyles = makeStyles({
    task: {
        height: '100vh',
        width: '100%',
        margin: '0',
        padding: '0',
        textAlign: 'center',
        backgroundColor: 'rgba(0,125,0,0.5)',
        textSize: '2rem',
        '& div.text': {
            width: '300px',
            height: '200px',
            margin: '5rem auto'
        }
    }
});

const TaskInfo = (props) => {
    console.log(props.match);
    const classes = useStyles();

    const bId = props.match.params.board;
    const tId = props.match.params.task;
    const board = props.state.boards.find(item => item.id === bId);
    const task = board.tasks.find(item => item.id === tId);

    return (
        <div className={classes.task}>
            <div className="text">
                <div>{`Board: ${board.title} ==> task: ${task.text}`}</div>
                <Link to="/">Return</Link>
            </div>
        </div>
    );
}

export default withRouter(TaskInfo);