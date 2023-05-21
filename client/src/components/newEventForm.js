import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react";
import DataService from '../services/dataService';

export default function NewEventForm() {
    const [date, setDate] = useState(new Date());   

    return (
        <Form>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="eventDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="duedate"
                                placeholder="Due date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="eventTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Form.Group className="mb-3" controlId="eventTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="eventDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="eventCategory">
                            <Form.Label>Category</Form.Label>
                            <CategoryList />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="eventType">
                            <Form.Label>Type</Form.Label>
                            <PlanTypeList />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Button variant="primary" type="submit">
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
            console.log(`categories: ${response.data}`);
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
                <option key={category.id} value={category.category_name}>{category.category_name}</option>
            ))}
        </Form.Select>
    )
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
            console.log(`plan types: ${response.data}`);
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
                <option key={planType.id} value={planType.planType_name}>{planType.planType_name}</option>
            ))}
        </Form.Select>
    )
}