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
import CalendarContainer from '../components/CalendarContainer';

import { usePlannerContext } from '../utils/PlannerContext';

// top right bottom left


export default function PlannerContainer(props) {

    const { view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate } = usePlannerContext();

    changeView(props.propView);

    const renderEventsContainer = () => {
        console.log('[PlannerContainer/PlannerContainer/renderEventsContainer]: rendering events container');
        return <EventsContainer pageTimestamp={timestamp} />;
    };

    const renderToDoList = () => {
        console.log('[PlannerContainer/PlannerContainer/renderToDoList]: rendering to do list');
        return <ToDoList />
    };

    const renderCalendarContainer = () => {
        console.log('[PlannerContainer/PlannerContainer/renderCalendarContainer]: rendering calendar');
        return <CalendarContainer />
    };

    // const renderTimeView = () => {
    //     if (view === 'day') {
    //         return (
    //             <Row>
    //                 <Col style={{'width':'50%', 'margin':'1%'}}>
    //                     {renderEventsContainer()}
    //                 </Col>
    //                 <Col style={{'width':'30%', 'margin': '1%'}}>
    //                     {renderToDoList()}
    //                 </Col>
    //             </Row>
    //         );
    //     }
    //     else {
    //         return (
    //             <Row>
    //                 <Col>{renderCalendarContainer()}</Col>
    //             </Row>
    //         );
    //     }
    // };


    // return (
    //     <div style={{'backgroundColor':'white', 'border':'5px solid blue'}}>
    //         <DateBar />
    //         <Container>{renderTimeView()}</Container>
    //     </div>
    // );

    return (
        <div style={{'backgroundColor':'white', 'border':'5px solid blue'}}>
            <DateBar />
            <Row>
                {/* <Col>{renderEventsContainer()}</Col>
                <Col>{renderToDoList()}</Col> */}
                <Col>{renderCalendarContainer()}</Col>
            </Row>
        </div>
    );


}
