import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NewEventForm from './NewEventForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../index.css';

export default function NavBar() {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="day">Daily Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="day">Day</Nav.Link>
            <Nav.Link href="week">Week</Nav.Link>
            <Nav.Link href="month">Month</Nav.Link>
            <Nav.Link href="settings">Settings</Nav.Link>
            <Button onClick={handleShowModal}>{'+'}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>New Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <NewEventForm />
      </Modal.Body>
    </Modal>

    </>
  );
}