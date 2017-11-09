export const attemptSetGridSize = (size) => ({
    type: 'ATTEMPT_SET_GRID_SIZE',
    size
});

export const setGridSize = (size) => ({
    type: 'SET_GRID_SIZE',
    size
});

export const attemptAddRobot = (position1, instructions1, position2, instructions2) => ({
    type: 'ATTEMPT_ADD_ROBOT',
    position1,
    instructions1,
    position2,
    instructions2,
});

export const addRobot = (position, currentPosition, instructions) => ({
    type: 'ADD_ROBOT',
    position,
    currentPosition,
    instructions
});
