import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";

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
                            <Form.Select>
                                <option>Select</option>
                                <option value="work">Work</option>
                                <option value="travel">Travel</option>
                                <option value="free-time">Free Time</option>
                                <option value="other">Other</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="eventType">
                            <Form.Label>Type</Form.Label>
                            <Form.Select>
                                <option>Select</option>
                                <option value="appointment">Appointment</option>
                                <option value="to-do">To Do</option>
                                <option value="due-date">Due Date</option>
                                <option value="other">Other</option>
                            </Form.Select>
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