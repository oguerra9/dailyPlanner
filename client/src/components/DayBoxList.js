import React, { useEffect, useState, useContext } from 'react';
import Date from '../utils/dateMethods';
import DataService from '../services/dataService';
import { usePlannerContext } from '../utils/PlannerContext';
import Popover from 'react-bootstrap/Popover';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import '../index.css';

export default function DayBoxList(props) {
    const [myEvents, setMyEvents] = useState([]);
    const [isLoading, setLoading] = useState([]);

    let detailedView = props.detailedView;

    let dayDate = props.dayDate;
    let dayTS = dayDate.getTime();

    const { view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate } = usePlannerContext();

    useEffect(() => {
        console.log(`[EventsContainer/EventList/useEffect]: rendering event list`);
        getDayEvents(dayTS);
    }, []);

    const getDayEvents = (dayTS) => {
        console.log(`[EventsContainer/EventList/getListEvents]: getListEvents called`);
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

    console.log(`[DayBoxList/DayBoxList]: events for ${dayDate} = ${JSON.stringify(myEvents)}`);

    if (detailedView === true) {
        if (myEvents.length === 0) {
            return (
                <Container>
                    <h1>{getDayString()}</h1>
                    <ul>
                        <li>---</li>
                    </ul>
                </Container>
            );
        }
        return (
            <Container>
                <h1>{getDayString()}</h1>
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
            </Container>
        );
    }

    if (myEvents.length === 0) {
        return (
            <div>
                <p id="MonthEvent" >---</p>
            </div>
        );
    }

    return (
        <>
            {myEvents.map(planned => (
                <div key={planned.id}>
                    <p id='MonthEvent'>- {planned.planned_title}</p>
                </div>
            ))}
        </>
    );
}
