import { React, useState } from 'react';
import Date from '../utils/dateMethods';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';

export default function DateBar(props) {
    let view = props.view;
    let timestamp = props.timestamp;
    

    const [pageDate, setPageDate] = useState(new Date(timestamp));

    const handleIncrement = () => {
        if (view === 'day') {
            setPageDate(pageDate.nextDay());
        } else if (view === 'week') {
            setPageDate(pageDate.nextWeek());
        } else if (view === 'month') {
            setPageDate(pageDate.nextMonth());
        }
    };

    const handleDecrement = () => {
        if (view === 'day') {
            setPageDate(pageDate.prevDay());
        } else if (view === 'week') {
            setPageDate(pageDate.prevWeek());
        } else if (view === 'month') {
            setPageDate(pageDate.prevMonth());
        }
    };
    
    console.log(`page date = ${pageDate}`);

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
        <Container fluid className='dateBar' style={{'width':'50%'}}>
            <Row>
                <Col md="auto"><Button onClick={handleDecrement}>{'<'}</Button></Col>
                <Col><h1>{dateString}</h1></Col>
                <Col md="auto"><Button onClick={handleIncrement}>{'>'}</Button></Col>
            </Row>
        </Container>
    );
}