const onTitleChanged = (boardId, newText, state)=> {
    let newBoards = [...state.boards];
    let board = newBoards.find( board => board.id === boardId);
    board.title = newText;
    state.setBoards(newBoards);
}

export default onTitleChanged;