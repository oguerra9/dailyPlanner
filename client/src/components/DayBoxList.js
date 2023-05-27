import React, { useEffect, useState } from 'react';
import Date from '../utils/dateMethods';
import DataService from '../services/dataService';
import { usePlannerContext } from '../utils/PlannerContext';
import Popover from 'react-bootstrap/Popover';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewEventForm from './NewEventForm';

import '../index.css';

export default function DayBoxList(props) {
    const [myEvents, setMyEvents] = useState([]);
    const [isLoading, setLoading] = useState([]);

    const { view } = usePlannerContext();

    let detailedView = props.detailedView;

    let dayDate = props.dayDate;
    let dayTS = dayDate.getTime();

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        getDayEvents(dayTS);
    }, []);

    const getDayEvents = (dayTS) => {
        (DataService.getPlannedDay(dayTS)).then((response) => {
            setMyEvents(response.data);
            setLoading(false);
        });
    };

    const getDayString = () => {
        return `${dayDate.getDayName()} - ${dayDate.getDisplayMonth()}/${dayDate.getDate()}`;
    }

    if (isLoading) {
        return (
            <div>
                <p id="MonthEvent">Loading...</p>
            </div>);
    }

    const renderDetailedEvents = () => {
        if (myEvents.length === 0) {
            return (
                <ul>
                    <li>---</li>
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

    if (detailedView === true) {
        return (
            <>
                <Container>
                    <Row>
                        <Col><h1>{getDayString()}</h1></Col>
                            <Button onClick={handleShowModal}>{'Add Events'}</Button>
                    </Row>
                    {renderDetailedEvents()}
                </Container>

                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewEventForm />
                    </Modal.Body>
                </Modal>
            </>
        );
    }

    if (myEvents.length === 0) {
        return (
            <div>
                <p id={`${view}Event`}></p>
            </div>
        );
    }

    return (
        <>
            {myEvents.map(planned => (
                <div key={planned.id}>
                    <p id={`${view}Event`}>- {planned.planned_title}</p>
                </div>
            ))}
        </>
    );
}
