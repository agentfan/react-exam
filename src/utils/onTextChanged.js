const onTextChanged = (boardId, taskId, newText, state)=> {
    let newBoards = [...state.boards];
    let board = newBoards.find( board => board.id === boardId);
    let task = board.tasks.find( item => item.id === taskId);
    task.text = newText;
    state.setBoards(newBoards);
}

export default onTextChanged;

