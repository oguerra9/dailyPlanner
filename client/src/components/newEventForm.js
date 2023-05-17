import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function NewEventForm() {
    const [date, setDate] = useState(new Date());

    return (
        <Form>
            <Form.Label>New Event</Form.Label>
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
            <Form.Group className="mb-3" controlId="eventTime">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" />
            </Form.Group>
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
            
            <Button variant="primary" type="submit">
                Add Event
            </Button>
        </Form>
    );
}

export default NewEventForm;