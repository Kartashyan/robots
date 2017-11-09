const robots = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ROBOT':
            return [
                ...state,
                {
                    position: action.position,
                    currentPosition: action.currentPosition,
                    instructions: action.instructions
                }
            ];
        default:
            return state
    }
};

export default robots;
