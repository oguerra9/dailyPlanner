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


export default function CalendarContainer() {
    const { view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate } = usePlannerContext();

    const [dates, setDates] = useState([]);

    let dateArr = [];
    let dateEventsArr = [];

    useEffect(() => {
        getDateArr();
        setDates(dateArr);
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
            let monthDays = TSDate.getDaysInMonth();
            dateArr = new Array(monthDays);
            let dayDate = TSDate.getMonthStart();
            for (let i = 0; i < monthDays; i++) {
                dateArr[i] = dayDate;
                dayDate = new Date(dayDate.nextDay());
            }
        }

        console.log(`[CalendarContainer/CalendarContainer/getDateArr]: dateArr = ${dateArr}`);
    };

    const getDaysEvents = () => {
        dateEventsArr = new Array(dateArr.length);
        for (let i = 0; i < dateEventsArr.length; i++) {
            dateEventsArr[i] = getListEvents(dateArr[i]);
        }
        console.log(`daysEvents = ${dateEventsArr}`);
    };

    const getListEvents = (dateBox) => {
        console.log(`[EventsContainer/EventList/getListEvents]: getListEvents called for date = ${dateBox}`);
        let boxTS = dateBox.getTime();
        let boxEvents = [];
        let loading = true;
        (DataService.getPlannedDay(boxTS)).then((response) => {
            //setMyEvents(response.data);
            boxEvents = response.data;
            loading = false;
        });
        console.log(`box events = ${boxEvents}`);

        if (loading === false) {
            
            return boxEvents;
        }

    };

    const renderDayBox = (dayDate) => {
        console.log(`date arr = ${dateArr}`);
        console.log(`rendering day box for ${dayDate}`);
        let eventsArr = getListEvents(dayDate);

        let dayString = '';

        if (view === 'week') {
            dayString = dayDate.getDayName();
        }

        if (view === 'month') {
            dayString = `${dayDate.getDisplayMonth()}/${dayDate.getDate()}`;
        }

        return (
            <Container style={{'border':'1px solid black'}}>
                <DayBoxList dayDate={dayDate} />
            </Container>
        );
    };

    console.log(`[CalendarContainer/CalendarContainer]: dates = ${dates}`);

    return (
        <div style={{'border':'1px solid green', 'padding': '5px', 'margin': '5px'}}>
            <ul>
                {dates.map(day => (
                    <li key={day.getTimelessStamp()}>
                        {day.getDate()}
                        <DayBoxList dayDate={day} />
                    </li>
                ))}
            </ul>
        </div>
    );

}