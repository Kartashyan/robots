const gridSize = (state = {x: 5, y: 5}, action) => {
    switch (action.type) {
        case 'SET_GRID_SIZE':
            return {...state, x: action.size.x, y: action.size.y}
        default:
            return state
    }
}

export default gridSize
