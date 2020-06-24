import React, { useState } from 'react'
import { ModalTaksContainer, Formulario } from './styles'
import {Modal, Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux'
import { setTasks } from '../store/actions'
function CreateTasks(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('')
    const [descricao, setDescricao] = useState('')

    const changeTitle = (event) => {
        const data = event.target.value;
        console.log(data)
        setTitle(data)
    }

    const changeDescription = (event) => {
        const data = event.target.value;
        console.log(data)
        setDescricao(data)
    }

    const createTasks = () => {
        console.log('clicou')
        const tasks = {
            title: title,
            desription: descricao
        }
        props.onSetTasks(tasks);
        handleClose()
    }

    return (
        <>
            <Button variant={'info'} onClick={handleShow}>
                Create Tasks
            </Button>
            <ModalTaksContainer>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Tasks</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formulario>
                            <Form>
                                <Form.Label>Title:</Form.Label>
                                <Form.Control type={'text'} maxLength={200} value={title} onChange={changeTitle} />
                                <Form.Text className="text-muted">
                                Digite o título de sua tarefa.
                                </Form.Text>
                                <br/>
                                <Form.Label>Description:</Form.Label>
                                <Form.Control type={'text'} value={descricao} onChange={changeDescription} />
                                <Form.Text className="text-muted">
                                Digite a descrição.
                                </Form.Text>
                            </Form>
                        </Formulario>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createTasks}>
                        Create
                    </Button>
                    </Modal.Footer>
                </Modal>
            </ModalTaksContainer>
        </>
    );
};

const mapDispatchToProps = (dispatch) =>{
    return{
        onSetTasks: (tasks) => dispatch(setTasks(tasks))
    }
}

export default connect(null, mapDispatchToProps)(CreateTasks);