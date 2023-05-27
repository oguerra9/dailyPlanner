import React from 'react';
import DateBar from '../components/DateBar';
import Date from '../utils/dateMethods';
import EventsContainer from '../components/EventsContainer';
import ToDoList from '../components/ToDoList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarContainer from '../components/CalendarContainer';

import { usePlannerContext } from '../utils/PlannerContext';

// top right bottom left


export default function PlannerContainer(props) {

    const { view, changeView } = usePlannerContext();

    changeView(props.propView);

    const renderEventsContainer = () => {
        console.log('[PlannerContainer/PlannerContainer/renderEventsContainer]: rendering events container');
        return <EventsContainer />;
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
        <div style={{'backgroundColor':'white', 'border':'1px solid blue'}}>
            <DateBar />
            {(view === 'day') ? (
                <Row className="justify-content-md-center">
                    <Col className="col-lg-6">{renderEventsContainer()}</Col>
                    <Col className="col-lg-3">{renderToDoList()}</Col>
                </Row>
            ) : (
                <Row>
                    <Col>{renderCalendarContainer()}</Col>
                </Row>
            )}
            
        </div>
    );


}
