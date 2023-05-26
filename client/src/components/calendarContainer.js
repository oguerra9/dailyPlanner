import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Date from '../utils/dateMethods';
import EventsContainer from './EventsContainer';
import { usePlannerContext } from '../utils/PlannerContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewEventForm from './NewEventForm';
import DataService from '../services/dataService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import DayBoxList from './DayBoxList';
import Card from 'react-bootstrap/Card';


export default function CalendarContainer() {
    const { view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate } = usePlannerContext();

    const [dates, setDates] = useState([]);
    const [months, setMonths] = useState([]);

    let dateArr = [];
    let monthArr = [];
    let dateEventsArr = [];

    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    useEffect(() => {
        getDateArr();
        setDates(dateArr);
        setMonths(monthArr);
        //getDaysEvents();
    }, [view, timestamp]);

    const getDateArr = () => {

        if (view === 'week') {
            dateArr = new Array(7);
            let dayDate = TSDate.getWeekStart();
            for (let i = 0; i < 7; i++) {
                dateArr[i] = dayDate;
                dayDate = new Date(dayDate.nextDay());
            }
        }
        if (view === 'month') {
            dateArr = new Array();
            let dayDate = TSDate.getMonthStart();
            console.log(`month start = ${dayDate}`);
            let dayNum = dayDate.getDay();
            let numDays = dayNum + dayDate.getDaysInMonth();
            console.log(`num days = ${numDays}`);
            dateArr.push(dayDate.getWeekStart());
            dayDate = dayDate.getWeekStart();
            console.log(`grid start = ${dayDate}`);

            for (let i = 1; i < numDays; i++) {
                dateArr.push(dayDate);
                dayDate = new Date(dayDate.nextDay());
            }
            console.log(`month end = ${dayDate}`);

            while (dayDate.getDay() != 6) {
                dateArr.push(dayDate);
                dayDate = new Date(dayDate.nextDay());
            }

            console.log(`*** dateArr after loop: ***`);
            console.log(dateArr);

            
            monthArr = [];
            let index = 0;

            while (index < dateArr.length) {
                let weekArr = new Array();

                let weekIndex = 0;
                while (weekIndex < 7) {
                    weekArr.push(dateArr[index]);
                    index += 1;
                    weekIndex += 1;
                }
                console.log(`week dates = ${weekArr}`);

                monthArr.push(weekArr);
                console.log(`month array dates = ${monthArr}`);
            }

            console.log(`finished month array = ${JSON.stringify(monthArr)}`);


        }

        console.log(`[CalendarContainer/CalendarContainer/getDateArr]: dateArr = ${dateArr}`);
    };

    console.log(`[CalendarContainer/CalendarContainer]: dates = ${dates}`);

    return (
        <div style={{'border':'1px solid green', 'padding': '5px', 'margin': '5px'}}>
            <Container>
                <Row className="justify-content-md-center">
                    {dayNames.map(name => (
                        <Col style={{'margin': 0, 'padding': 0, 'width': '14%'}} className='col-lg-2'>{name}</Col>
                    ))}
                </Row>
                <Row className="justify-content-md-center">
                    {dates.map(day => (
                        <Col style={{'margin': 0, 'padding': 0, 'width': '14%'}} className='col-lg-2'>
                            <Card key={day.getTimelessStamp()}>
                                <Card.Header>{day.getDate()}</Card.Header>
                                <Card.Body>
                                    <DayBoxList dayDate={day} />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );

}