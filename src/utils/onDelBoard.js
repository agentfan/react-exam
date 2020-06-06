const onDelBoard = (boardId, state)=> {
    let newBoards = [...state.boards];
    let id = newBoards.findIndex( board => board.id === boardId);
    if(id !== -1) {
        newBoards.splice(id,1);
        state.setBoards(newBoards);
    }
}

export default onDelBoard;