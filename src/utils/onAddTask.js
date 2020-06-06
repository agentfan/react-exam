const onAddTask = (boardId, state)=> {
    let newBoards = [...state.boards];
    let board = newBoards.find( board => board.id === boardId);
    let maxID = -1;
    board.tasks.forEach(task => {if(task.id > maxID) maxID = task.id});
    board.tasks.push({id: ++maxID, text: ""});
    state.setBoards(newBoards);
}

export default onAddTask;