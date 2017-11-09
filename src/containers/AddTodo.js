import React from 'react';
import {connect} from 'react-redux';
import {attemptSetGridSize, attemptAddRobot} from '../actions';

let AddTodo = ({dispatch}) => {
    let input1;
    let input2;
    let input3;
    let input4;
    let input5;

    return (
        <div className="col-lg-6">
            <form onSubmit={e => {
                e.preventDefault();

                dispatch(attemptAddRobot(input2.value, input3.value, input4.value, input5.value));
                input2.value = '';
                input3.value = '';
                input4.value = '';
                input5.value = '';
            }}>

                <p>Grid size</p>
                <div style={{fontSize: 12}}>Enter data with spaces</div>
                <input ref={node => {
                    input1 = node
                }}/>
                <button onClick={e => {
                    e.preventDefault();
                    if (!input1.value.trim()) {
                        return
                    }
                    dispatch(attemptSetGridSize(input1.value));
                    input1.value = ''
                }}>
                    Set Grid Size
                </button>
                <br/>
                <h2>Robot 1</h2>
                <p>Initial position</p>
                <div style={{fontSize: 12}}>Enter data with spaces (for example: 2 2 N)</div>
                <input ref={node => {
                    input2 = node
                }}/><br/>

                <p>Instructions</p>
                <div style={{fontSize: 12}}>Enter data without spaces (for example RFFLFF)</div>

                <input ref={node => {
                    input3 = node
                }}/><br/>

                <h2>Robot 2</h2>
                <p>Initial position</p>
                <div style={{fontSize: 12}}>Enter data with spaces (for example: 2 2 N)</div>
                <input ref={node => {
                    input4 = node
                }}/><br/>

                <p>Instructions</p>
                <div style={{fontSize: 12}}>Enter data without spaces (for example RFFLFF)</div>
                <input ref={node => {
                    input5 = node
                }}/><br/>
                <button className="btn btn-primary" type="submit">
                    Add Robot
                </button>
            </form>
        </div>
    )
};
AddTodo = connect()(AddTodo);

export default AddTodo;
