import {combineReducers} from 'redux'
import gridSize from './gridSize'
import robots from './robots'

const todoApp = combineReducers({
    gridSize,
    robots
});

export default todoApp
