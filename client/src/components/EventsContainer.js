import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewEventForm from './NewEventForm';
import Date from '../utils/dateMethods';
import DataService from '../services/dataService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { usePlannerContext } from '../utils/PlannerContext';

export default function EventsContainer() {

    const { view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate } = usePlannerContext();

    const [show, setShow] = useState(false);
    const [myEvents, setMyEvents] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let events = [];


    useEffect(() => {
        console.log(`[EventsContainer/EventsContainer/useEffect]: re-rendering event container`);
    }, [view, timestamp]);

    const renderEventList = () => {
        console.log(`[EventsContainer/EventsContainer/renderEventList]: rendering event list`);
        return <EventList />;
    }

    return (
        <div style={{'border':'5px solid red'}}>          
            <Container>
                <Row style={{'backgroundColor':'gray'}}>
                    <Col>
                        <h2>{view} Events</h2>
                    </Col>
                    <Col md="auto">
                        <Button onClick={handleShow}>+</Button>
                    </Col>
                </Row>
            </Container>

            <Container>
                {renderEventList()}
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

function EventList() {
    const [myEvents, setMyEvents] = useState([]);
    const [isLoading, setLoading] = useState([]);

    const { view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate } = usePlannerContext();

    useEffect(() => {
        console.log(`[EventsContainer/EventList/useEffect]: re-rendering event list`);
        getListEvents();
    }, [view, timestamp]);

    const getListEvents = () => {
        console.log(`[EventsContainer/EventList/getListEvents]: getListEvents called`);
        if (view === 'day') {
            (DataService.getPlannedDay(timestamp)).then((response) => {
                setMyEvents(response.data);
                setLoading(false);
            });
        } 
        if (view === 'week') {
            (DataService.getPlannedWeek(timestamp)).then((response) => {
                setMyEvents(response.data);
                setLoading(false);
            });
        } 
        if (view === 'month') {
            (DataService.getPlannedMonth(timestamp)).then((response) => {
                setMyEvents(response.data);
                setLoading(false);
            });
        }
    };

    if (isLoading) {
        return (<div>Loading...</div>);
    }

    if (myEvents.length === 0) {
        return (
            <ul>
                <li>Click the '+' to add events</li>
            </ul>
        );
    }

    console.log(`[EventsContainer/EventList]: myEvents = ${JSON.stringify(myEvents)}`);

    if (view === 'month') {
        return (
            <ul>
                {myEvents.map(planned => (
                    <li key={planned.id}>
                        <h5>{planned.planned_title}</h5>
                        <h6>{planned.planned_description}</h6>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <ul>
            {myEvents.map(planned => (
                <OverlayTrigger
                    trigger="hover || focus"
                    key={planned.id}
                    placement="right"
                    overlay={
                        <Popover id={`plannedPopover${planned.id}`}>
                            <Popover.Header as="h3">{planned.planned_title}</Popover.Header>
                            <Popover.Body style={{'margin':'0px 10px 0px 10px'}}>
                                <Col>
                                    <Row>{planned.planned_description}</Row>
                                    <Row>Category: {planned.category.category_name}</Row>
                                    <Row>Plan Type: {planned.planType.planType_name}</Row>
                                </Col>
                            </Popover.Body>
                        </Popover>
                    }
                    >
                        <li key={planned.id} className={planned.category.category_name} id={planned.planType.planType_name}>
                            <h5>{planned.planned_title}</h5>
                            <h6>{planned.planned_description}</h6>
                        </li>
                </OverlayTrigger>
            ))}
        </ul>
    );
}
