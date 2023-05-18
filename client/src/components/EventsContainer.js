import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewEventForm from './NewEventForm';
import EventList from './EventList';

export default function EventsContainer(props) {
    const [show, setShow] = useState(false);

    let view = props.view;
    let timestamp = props.view;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

            <Container>
                <EventList />
            </Container>
            
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