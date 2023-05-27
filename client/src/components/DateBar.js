import { React, useState } from 'react';
import Date from '../utils/dateMethods';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import { usePlannerContext } from '../utils/PlannerContext';

// section to display currently displayed date/range and increment/decrement time
export default function DateBar() {

    const { view, timestamp, changeTSDate } = usePlannerContext();
    
    const [pageDate, setPageDate] = useState(new Date(timestamp));

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
            <Row className="justify-content-md-center">
                <Col md="auto" >
                    <Button style={{'margin': '10px 0px 10px 0px'}} onClick={handleDecrement}>{'<'}</Button>
                </Col>
                <Col className="col-lg-4 justify-content-md-center"><h1 style={{'text-align': 'center', 'margin': '10px 0px 10px 0px'}}>{dateString}</h1></Col>
                <Col md="auto">
                    <Button style={{'margin': '10px 0px 10px 0px'}} onClick={handleIncrement}>{'>'}</Button>
                </Col>
            </Row>
        </Container>
    );
}

