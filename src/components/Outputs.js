import React from 'react';
import PropTypes from 'prop-types';
import Output from './Output';

const Outputs = ({robots, gridSize}) => (
        <div>
            <h2>Outputs</h2>
            {robots.map((robot, index) =>
                <Output
                    key={index}
                    id={Date.now().toString()}
                    position={robot.position}
                    currentPosition={robot.currentPosition}
                    instructions={robot.instructions}
                    gridSize={gridSize}
                />
            )}
        </div>
    );


Outputs.propTypes = {
    robots: PropTypes.array.isRequired,
};

export default Outputs;
