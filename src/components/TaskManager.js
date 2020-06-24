import React, { useState } from 'react'
import { TaskManager, TaskItemManager, TaskManagerContainerTitle } from './styles'
import { connect } from 'react-redux'
import { incrementChecked, decrementChecked } from '../store/actions'
const data = require('../data/examples.json')

const List = ({ callback1, callback2, item }) => {
    const [checked, setChecked] = useState(false)
    const changeChecked = event => {
        const value = event.target.checked;
        if(value){
            callback1()
        }else{
            callback2()
        }
        setChecked(value)
    }
    return (
        <TaskItemManager checked={checked}>                
            <TaskManagerContainerTitle>
                {item.title}
            </TaskManagerContainerTitle>
            {item.descricao}
            <input type='checkbox' onChange={changeChecked}/>
        </TaskItemManager>
    )
}

function TaskManagerContainer(props) {

    const renderItem = () => {
        console.log(props.tasks)
        const componentes = props.tasks.map((item) => {
            return (
                <List item={item} callback1={props.onIncrementChecked} callback2={props.onDecrementChecked}/>
            )
        })
        return componentes
    }

    return (
        <TaskManager>
            {props.tasks ? renderItem() : 'Empty'}
        </TaskManager>
    )
}

const mapStateToProps = ({ tasks }) => {

    return {
        tasks: tasks.tasks
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementChecked: () => dispatch(incrementChecked()),
        onDecrementChecked: () => dispatch(decrementChecked()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManagerContainer)