import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Date from '../utils/dateMethods';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import { usePlannerContext } from '../utils/PlannerContext';
import DataService from '../services/dataService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ToDoList from './ToDoList';

export default function DateBar() {

    const { view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate } = usePlannerContext();
    
    const [myEvents, setMyEvents] = useState([]);

    const [isLoading, setLoading] = useState(false);

    const [pageDate, setPageDate] = useState(new Date(timestamp));

    const [isPopulated, setPopulated] = useState(false);

    console.log(`[DateBar: DateBar:] view: ${view} time: ${new Date(timestamp)}`);

    const handleIncrement = () => {
        if (view === 'day') {
            setPageDate(pageDate.nextDay());
        } else if (view === 'week') {
            setPageDate(pageDate.nextWeek());
        } else if (view === 'month') {
            setPageDate(pageDate.nextMonth());
        }
        changeTSDate(pageDate);
    };

    const handleDecrement = () => {
        if (view === 'day') {
            setPageDate(pageDate.prevDay());
        } else if (view === 'week') {
            setPageDate(pageDate.prevWeek());
        } else if (view === 'month') {
            setPageDate(pageDate.prevMonth());
        }
        changeTSDate(pageDate);
    };

    let dateString = 'incorrect';

    if (view === 'day') {
        dateString = pageDate.getDayName() + ' - ' + pageDate.getDisplayMonth() + '/' + pageDate.getDate();
    }

    if (view === 'week') {
        let weekStart = pageDate.getWeekStart();
        let weekEnd = pageDate.getWeekEnd();
        dateString = weekStart.getDisplayMonth() + '/' + weekStart.getDate() + ' - ' + weekEnd.getDisplayMonth() + '/' + weekEnd.getDate();
    }

    if (view === 'month') {
        dateString = pageDate.getMonthName() + ' ' + pageDate.getFullYear();
    }


    return (
        <Container>
            <Row>
                <Col md="auto">
                    <Button onClick={handleDecrement}>{'<'}</Button>
                </Col>
                <Col><h1>{dateString}</h1></Col>
                <Col md="auto">
                    <Button onClick={handleIncrement}>{'>'}</Button>
                </Col>
            </Row>
        </Container>
    );
}

