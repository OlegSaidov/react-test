import React, { useState, } from 'react'
import { Button, Modal, Container } from 'react-bootstrap'
import jsonString from '../utils/jsonString'
import PropTypes from 'prop-types'

export function Serialize(props) {

    const [show, setShow] = useState(false);
    const rawState = props.tree;
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const serialize = (rawState) => jsonString(rawState);

    return (
        <Container fluid={true}>
            <Button variant="primary" onClick={handleShow}>
                Serialize
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Serilized Data</Modal.Title>
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

Serialize.propTypes = {
    tree: PropTypes.object
}

