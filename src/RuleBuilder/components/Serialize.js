import React, { useState, } from 'react'
import { Button, Modal } from 'react-bootstrap'
import jsonString from '../utils/jsonString'
import PropTypes from 'prop-types'

export function Serialize(props) {

    const [show, setShow] = useState(false);
    const rawState = props.tree;
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const serialize = (rawState) => jsonString(rawState);

    return (
        <div className="serialize">
            <Button variant="primary" className="btn-serialize btn-sm" onClick={handleShow}>
                Serialize
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Serialized Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <code className="query-preview">
                    {serialize(rawState)}
                    </code>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="btn-serialize btn-sm" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

Serialize.propTypes = {
    tree: PropTypes.object
}

