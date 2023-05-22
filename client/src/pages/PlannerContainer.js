import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DateBar from '../components/DateBar';
import Date from '../utils/dateMethods';
import EventsContainer from '../components/EventsContainer';
import ToDoList from '../components/ToDoList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// top right bottom left


export default function PlannerContainer(props) {
    let view = props.view;
    // let { timestamp } = useParams();

    // if (!(timestamp > 0)) {
    //     timestamp = (new Date()).getTime();
    // }
    let timestamp = (new Date()).getTime();

    console.log(`planner container timestamp = ${timestamp}`);

    return (
        <div style={{'backgroundColor':'white', 'border':'5px solid blue'}}>
            <DateBar view={view} timestamp={timestamp} />
            <Row>
                <Col style={{'width':'50%', 'margin':'1%'}}>
                    <EventsContainer view={view} timestamp={timestamp} />
                </Col>
                <Col style={{'width':'30%', 'margin': '1%'}}>
                    <ToDoList view={view} timestamp={timestamp} />
                </Col>
            </Row>
        </div>
    );

}
