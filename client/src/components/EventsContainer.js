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
//import EventList from './EventList';

export default function EventsContainer(props) {
    const [show, setShow] = useState(false);

    let view = props.view;
    let timestamp = props.timestamp;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <EventList view={view} timestamp={timestamp}/>
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



function EventList(props) {
    const [myEvents, setMyEvents] = useState({});
    const [isLoading, setLoading] = useState(true);

    let view = props.view;
    let timestamp = props.timestamp;

    let timestampDate = new Date(timestamp);

    useEffect(() => {
        console.log(`EventsContainer: retrieving events for ${timestampDate}`);
        if (view === 'day') {
            getDayEvents(timestamp);
        }
        if (view === 'week') {
            getWeekEvents(timestamp);
        }
        if (view === 'month') {
            getMonthEvents(timestamp);
        }
    }, []);

    const getDayEvents = (timestamp) => {
        setMyEvents([]);
        (DataService.getPlannedDay(timestamp)).then((response) => {
            setMyEvents(response.data);
            setLoading(false);
            console.log(response.data);
        });
    };

    const getWeekEvents = (timestamp) => {
        setMyEvents([]);
        (DataService.getPlannedWeek(timestamp)).then((response) => {
            setMyEvents(response.data);
            setLoading(false);
            console.log(response.data);
        });
    };

    const getMonthEvents = (timestamp) => {
        setMyEvents([]);
        (DataService.getPlannedMonth(timestamp)).then((response) => {
            setMyEvents(response.data);
            setLoading(false);
            console.log(response.data);
        });
    };

        
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (myEvents.length === 0) {
        return (
            <ul>
                <li>Click the '+' to add events</li>
            </ul>
        );
    }

    return (
        <ul>
            {myEvents.map(planned => (
                <OverlayTrigger
                    trigger="hover"
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
