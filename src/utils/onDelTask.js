const onDelTask = (boardId, taskId, state)=> {
    let newBoards = [...state.boards];
    let board = newBoards.find( board => board.id === boardId);
    let id = board.tasks.findIndex( item => item.id === taskId);
    if(id !== -1) {
        board.tasks.splice(id,1);
        state.setBoards(newBoards);
    }
}

export default onDelTask;