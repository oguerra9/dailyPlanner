import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewEventForm from './NewEventForm';
import DataService from '../services/dataService';


export default function EventList(props) {
    const [show, setShow] = useState(false);

    let view = props.view;
    let timestamp = props.view;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let eventsArr = DataService.getAllPlanned();
    console.log(`eventsArr = ${JSON.stringify(eventsArr)}`);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>{view} Events</h2>
                    </Col>
                    <Col>
                        <Button onClick={handleShow}>+</Button>
                    </Col>
                </Row>
            </Container>
            <ul>
                <li>events</li>
                {/* {eventArr.map(planned => (
                    <li key={planned.id}>{planned.planned_title}</li>
                ))} */}
            </ul>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewEventForm />
                </Modal.Body>
            </Modal>
        </div>
    );
}