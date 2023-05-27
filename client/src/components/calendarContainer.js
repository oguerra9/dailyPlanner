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
import '../index.css';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function CalendarContainer() {
    const { view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate } = usePlannerContext();

    const [dates, setDates] = useState([]);
    const [months, setMonths] = useState([]);

    let mayfirst = new Date();
    mayfirst.setMonth(4);
    mayfirst.setDate(1);
    mayfirst.setFullYear(2023);
    console.log(`may first = ${mayfirst}`);
    console.log(`may first ts = ${mayfirst.getTime()}`);

    const [canvasDate, setCanvasDate] = useState(TSDate);

    const [showCanvas, setShowCanvas] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCloseCanvas = () => setShowCanvas(false);
    const handleShowCanvas = (dayDate) => setShowCanvas(true);
    
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    let dateArr = [];
    let monthArr = [];

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
            let dayNum = dayDate.getDay();
            let numDays = dayNum + dayDate.getDaysInMonth();
            dateArr.push(dayDate.getWeekStart());
            dayDate = dayDate.getWeekStart();

            for (let i = 1; i < numDays; i++) {
                dateArr.push(dayDate);
                dayDate = new Date(dayDate.nextDay());
            }

            while (dayDate.getDay() != 6) {
                dateArr.push(dayDate);
                dayDate = new Date(dayDate.nextDay());
            }
            
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
                monthArr.push(weekArr);
            }
        }
    };

    return (
        <div style={{'border':'1px solid green', 'padding': '5px', 'margin': '5px'}}>
            <Container>
                <Row className="justify-content-md-center">
                    {dayNames.map(name => (
                        <Col id='WeekDayTitles' className='col-lg-2'>
                            {name}
                        </Col>
                    ))}
                </Row>
                <Row className="justify-content-md-center">
                    {dates.map(day => (
                            <Col style={{'margin': 0, 'padding': 0, 'width': '14%'}} className='col-lg-2'>
                                <Card 
                                    key={day.getTimelessStamp()} 
                                    style={{'border-radius':0, 'height': '120px'}} 
                                    onClick={() => {
                                        console.log(`clicked ${new Date(day)}`);
                                        setCanvasDate(new Date(day));
                                        handleShowCanvas();
                                    }}
                                >
                                    <Card.Header style={{'margin': 0, 'padding': '2px'}}>{day.getDate()}</Card.Header>
                                    <Card.Body style={{'padding': '2px'}}>
                                        <DayBoxList dayDate={day} detailedView={false} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>

            <Offcanvas show={showCanvas} onHide={handleCloseCanvas} {...canvasDate}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Day's Events
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <DayBoxList dayDate={canvasDate} detailedView={true} />
                </Offcanvas.Body>
            </Offcanvas>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewEventForm />
                </Modal.Body>
            </Modal>
        </div>
    );

}