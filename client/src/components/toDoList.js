import React, { useState, useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewToDoForm from './NewToDoForm';
import DataService from '../services/dataService';
import Popover from 'react-bootstrap/Popover';
import Modal from 'react-bootstrap/Modal';

export default function ToDoList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{'border':'5px solid red'}}>           
                <Container>
                    <Row style={{'backgroundColor':'gray'}}>
                        <Col>
                            <h2>To-Do</h2>
                        </Col>
                        <Col md="auto">
                            <Button onClick={handleShow}>+</Button>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <ToDoItems />
                </Container>   

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New To-Do</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewToDoForm />
                    </Modal.Body>
                </Modal>         
        </div>
    );
}

function ToDoItems() {
    const [myToDos, setMyToDos] = useState({});
    const [isLoading, setLoading] = useState(true);
        
    useEffect(() => {
        getAllToDos();
    }, []);
        
    const getAllToDos = () => {
        (DataService.getAllToDos()).then((response) => {
            setMyToDos(response.data);
            setLoading(false);
            console.log(`[ToDoList/ToDoItems/getAllToDos/DS.getAllToDos]: to do items ${JSON.stringify(response.data)}`);
        });
    };
        
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {myToDos.map(toDo => (
                
                <OverlayTrigger
                    trigger="hover || focus"
                    key={toDo.id}
                    placement="left"
                    overlay={
                        <Popover id={`toDoPopover${toDo.id}`}>
                            <Popover.Header as="h3">{toDo.planned_title}</Popover.Header>
                            <Popover.Body style={{'margin':'0px 10px 0px 10px'}}>
                                <Col>
                                    <Row>{toDo.planned_description}</Row>
                                    <Row>Category: {toDo.category.category_name}</Row>
                                </Col>
                            </Popover.Body>
                        </Popover>
                    }
                    >
                        <li key={toDo.id} className={toDo.category.category_name} id={`active${toDo.planned_active}`}>
                            <h5>{toDo.planned_title}</h5>
                            <h6>{toDo.planned_description}</h6>
                        </li>
                </OverlayTrigger>
            ))}
        </ul>
    );
}