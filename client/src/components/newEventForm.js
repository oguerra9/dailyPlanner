import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataService from '../services/dataService';


export default function NewEventForm() {
    const [newEventFormData, setNewEventFormData] = useState(
        { 
            planned_date: '', 
            planned_time: '',
            planned_title: '',
            planned_am: '',
            planned_description: '',
            category_id: '',
            planType_id: '',
            planned_active: '',
        }
    );
    const [date, setDate] = useState(new Date());   
       
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewEventFormData({ ...newEventFormData, [name]: value });
    };

    const submitForm = (event) => {
        let currDate = new Date();
        let currTS = currDate.getTime();

        console.log(`[NewEventForm/NewEventForm/submitForm]: new event form data = ${JSON.stringify(newEventFormData)}`);
        let eventDate = new Date(newEventFormData.planned_date);
        let eventDateTime = new Date(`${eventDate.getMonthName()} ${eventDate.getDate()} ${eventDate.getFullYear()} ${newEventFormData.planned_time}`);
        let eventDateTimeTS = eventDateTime.getTime();
        console.log(`[NewEventForm/NewEventForm/submitForm]: event date time = ${eventDateTime}`);
        newEventFormData.planned_date = eventDateTime;
        console.log(`[NewEventForm/NewEventForm/submitForm]: event date = ${JSON.stringify(eventDate)}`);
        console.log(`[NewEventForm/NewEventForm/submitForm]: new event form data planned time = ${JSON.stringify(newEventFormData.planned_time)}`);
        newEventFormData.category_id = parseInt(newEventFormData.category_id);
        newEventFormData.planType_id = parseInt(newEventFormData.planType_id);

        let eventHour = eventDateTime.getHours();
        if (eventHour < 12) {
            newEventFormData.planned_am = true;
        } else {
            newEventFormData.planned_am = false;
        }

        if (eventDateTimeTS < currTS) {
            newEventFormData.planned_active = false;
        } else {
            newEventFormData.planned_active = true;
        }
        

        (DataService.createPlanned(newEventFormData)).then((response) => {
            console.log(`[NewEventForm/NewEventForm/submitForm/DS.createPlanned]: ${response.data}`);
        });

    };

    return (
        <Form>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="eventDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="planned_date"
                                placeholder="Due date"
                                value={newEventFormData.planned_date}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="eventTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control 
                                type="time" 
                                name="planned_time"
                                value={newEventFormData.planned_time}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Form.Group className="mb-3" controlId="eventTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="planned_title" onChange={handleChange} value={newEventFormData.planned_title} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="eventDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="planned_description" value={newEventFormData.planned_description} onChange={handleChange} />
                </Form.Group>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Form.Group 
                            className="mb-3"  
                            name="category_id" 
                            controlId="category_id"
                            value={newEventFormData.category_id} 
                            onChange={e => {
                                console.log("selected category id", e.target.value);
                                setNewEventFormData({ ...newEventFormData, category_id: e.target.value });
                            }}
                        >
                            <Form.Label>Category</Form.Label>
                            <CategoryList />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group 
                            className="mb-3"  
                            name="planType_id" 
                            controlId="planType_id"
                            value={newEventFormData.planType_id} 
                            onChange={e => {
                                console.log("selected plan type id:", e.target.value);
                                setNewEventFormData({ ...newEventFormData, planType_id: e.target.value });
                            }}
                        >
                            <Form.Label>Type</Form.Label>
                            <PlanTypeList />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Button variant="primary" type="submit" onClick={submitForm}>
                Add Event
            </Button>
        </Form>
    );
}

function CategoryList() {
    const [myCategories, setMyCategories] = useState({});
    const [isLoadingCat, setLoadingCat] = useState(true);

    useEffect(() => {
        getMyCategories();
    }, []);

    const getMyCategories = () => {
        (DataService.getAllCategories()).then((response) => {
            setMyCategories(response.data);
            setLoadingCat(false);
        });
    };

    if (isLoadingCat) {
        return (
            <Form.Select>
                <option>Select</option>
                <option>Loading...</option>
            </Form.Select>
        );
    }
    return (
        <Form.Select>
            <option>Select</option>
            {myCategories.map(category => (
                <option key={category.id} value={category.id}>{category.category_name}</option>
            ))}
        </Form.Select>
    );

}

function PlanTypeList() {
    const [myPlanTypes, setMyPlanTypes] = useState({});
    const [isLoadingPT, setLoadingPT] = useState(true);

    useEffect(() => {
        getMyPlanTypes();
    }, []);

    const getMyPlanTypes = () => {
        (DataService.getAllPlanTypes()).then((response) => {
            setMyPlanTypes(response.data);
            setLoadingPT(false);
        });
    };

    if (isLoadingPT) {
        return (
            <Form.Select>
                <option>Select</option>
                <option>Loading...</option>
            </Form.Select>
        );
    }
    return (
        <Form.Select>
            <option>Select</option>
            {myPlanTypes.map(planType => (
                <option key={planType.id} value={planType.id}>{planType.planType_name}</option>
            ))}
        </Form.Select>
    )
}