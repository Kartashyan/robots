import {setGridSize, addRobot} from '../actions';
import {delay} from 'redux-saga'
import {put, takeEvery} from 'redux-saga/effects'
import {getNewPosition} from '../helpers'

function* attemptAddRobot(action) {
    let currentPosition1 = getNewPosition(action.position1, action.instructions1);
    let currentPosition2 = getNewPosition(action.position2, action.instructions2);
    yield put(addRobot(action.position1, currentPosition1, action.instructions1));
    yield delay(1000);
    yield put(addRobot(action.position2, currentPosition2, action.instructions2));
}

function* attemptSetGridSize(action) {
    let x = action.size.split(' ').shift();
    let y = action.size.split(' ').pop();
    yield put(setGridSize({x, y}))
}

export function* sagaMiddlewares() {
    yield takeEvery("ATTEMPT_SET_GRID_SIZE", attemptSetGridSize);
    yield takeEvery("ATTEMPT_ADD_ROBOT", attemptAddRobot);
}


