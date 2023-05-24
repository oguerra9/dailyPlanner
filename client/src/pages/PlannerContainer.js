import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DateBar from '../components/DateBar';
import Date from '../utils/dateMethods';
import EventsContainer from '../components/EventsContainer';
import ToDoList from '../components/ToDoList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { usePlannerContext } from '../utils/PlannerContext';

// top right bottom left


export default function PlannerContainer(props) {

    const { view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate } = usePlannerContext();

    changeView(props.propView);

    const renderEventsContainer = () => {
        console.log('[PlannerContainer/PlannerContainer/renderEventsContainer]: rendering events container');
        return <EventsContainer />;
    };

    const renderToDoList = () => {
        console.log('[PlannerContainer/PlannerContainer/renderToDoList]: rendering to do list');
        return <ToDoList />
    };

    return (
        <div style={{'backgroundColor':'white', 'border':'5px solid blue'}}>
            <DateBar />
            <Row>
                <Col style={{'width':'50%', 'margin':'1%'}}>
                    {renderEventsContainer()}
                </Col>
                <Col style={{'width':'30%', 'margin': '1%'}}>
                    {renderToDoList()}
                </Col>
            </Row>
        </div>
    );

}
