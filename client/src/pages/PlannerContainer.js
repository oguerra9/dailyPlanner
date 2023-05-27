import React from 'react';
import DateBar from '../components/DateBar';
import Date from '../utils/dateMethods';
import EventsContainer from '../components/EventsContainer';
import ToDoList from '../components/ToDoList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarContainer from '../components/CalendarContainer';
import WeatherContainer from '../components/WeatherContainer';

import { usePlannerContext } from '../utils/PlannerContext';

// top right bottom left


export default function PlannerContainer(props) {

    const { view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate, boxDate, changeBoxDate } = usePlannerContext();

    let todaysDate = (new Date()).getTimelessStamp();
    console.log(`todays date = ${todaysDate}`);

    let windowDate = TSDate.getTimelessStamp();
    console.log(`window date = ${windowDate}`);

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

    const renderWeatherContainer = () => {
        console.log('[PlannerContainer/PlannerContainer/renderWeatherContainer]: rendering weather');
        return <WeatherContainer />   
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
                    {(todaysDate === windowDate) ? (
                        <Col className="col-lg-3">{renderWeatherContainer()}</Col>
                    ) : (<></>)}
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
