import React, { useState, } from 'react';
import { Button, Modal, Container } from 'react-bootstrap';

export function Serialize(props) {

    const [show, setShow] = useState(false);
    const rawState = props.state;
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const serialize = raw => {
        return(
            JSON.stringify(raw)
        )
    } 
  
    return (
      <Container fluid={true}>
        <Button variant="primary" onClick={handleShow}>
          Serialize
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{serialize(rawState)}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }

