import React from 'react';
import Board from './components/board';
import AddBoard from './components/addboard';
import { StylesProvider, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TaskInfo from './components/taskinfo';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '1rem',
    backgroundColor: 'rgb(153, 153, 238)'
  }
});

const myBoards = [
  {
    id: 0,
    title: 'First',
    tasks: [
      {
        id: 0,
        text: 'fffff'
      },
      {
        id: 1,
        text: 'dfbdhdh'
      },
      {
        id: 2,
        text: 'ertert'
      },
      {
        id: 3,
        text: 'bnhjb'
      },
    ]
  },
  {
    id: 1,
    title: 'Second',
    tasks: [
      {
        id: 0,
        text: 'fffff'
      },
      {
        id: 1,
        text: 'dfbdhdh'
      },
      {
        id: 2,
        text: 'ertert'
      },
      {
        id: 3,
        text: 'bnhjb'
      },
    ]
  },
];

function App() {

  const classes = useStyles();

  const [boards, setBoards] = React.useState(myBoards);

  const state = {
    boards: boards,
    setBoards: setBoards
  };

  console.error(boards);

  return (
    <Router>
      <div>
      <Switch>
        <Route path="/:board/:task">
          <TaskInfo state={state} />
        </Route>
        <Route path="/">
          <div className={classes.root}>
            {boards && boards.map(board => <Board key={board.id} board={board} state={state} />)}
            <AddBoard state={state} />
          </div>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
