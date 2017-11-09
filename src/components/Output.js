import React from 'react';
import PropTypes from 'prop-types';
import {isLost} from '../helpers';

const Output = (props) => {
    let lost = isLost(props.gridSize, props.currentPosition);
    return (
        <div>
            <span>Robot: {props.id} </span><br/>
            <span>Initial Position: </span>
            <span>{props.position}</span><br/>
            <span>Instructions: </span>
            <span>{props.instructions}</span><br/>
            <span>Current Position: </span>
            <span>{props.currentPosition}</span><br/>
            {lost ? <span>Lost</span> : null}
            <br/><br/>
        </div>
    )
};

Output.propTypes = {
    position: PropTypes.string.isRequired,
    currentPosition: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    gridSize: PropTypes.object.isRequired
};

export default Output;
