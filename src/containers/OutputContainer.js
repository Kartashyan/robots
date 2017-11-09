import {connect} from 'react-redux';
import Outputs from '../components/Outputs';

const mapStateToProps = (state) => ({
    robots: state.robots,
    gridSize: state.gridSize
});

const OutputContainer = connect(
    mapStateToProps,
    null
)(Outputs);

export default OutputContainer;
