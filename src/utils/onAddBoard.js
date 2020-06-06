const onAddBoard = (state)=> {
    let newBoards = [...state.boards];
    let maxID = -1;
    newBoards.forEach(board => {if(board.id > maxID) maxID = board.id});
    newBoards.push({id: ++maxID, title: "", tasks: []});
    state.setBoards(newBoards);
}

export default onAddBoard;