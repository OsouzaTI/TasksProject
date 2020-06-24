import React from 'react';
import { Container, Tasks, Timer } from './styles'
import { Button, ProgressBar } from 'react-bootstrap'
import { connect } from 'react-redux'

const SideList = (props) => {
    let countTasks = 0;
    let countCheckeds = 0;
    if(props.tasks){
        countTasks = props.tasks.length;
    }
    if(props.checkeds){
        countCheckeds = props.checkeds;
    }

    return (
        <Container>
            <Tasks>
                {`Tasks -> ${countTasks}`}
            </Tasks>
            <Tasks>
                {`Tasks Checkeds -> ${countCheckeds}`}
            </Tasks>
        </Container>
    );
}

const mapStateToProps = ({ tasks }) => {

    return {
        tasks: tasks.tasks,
        checkeds: tasks.tasksChecked
    }

}

export default connect(mapStateToProps,null)(SideList);
